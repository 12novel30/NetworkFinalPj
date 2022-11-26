package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Entity.Place;
import com.network.spring.Network.Service.PlaceService;
import com.network.spring.Network.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PlaceController {

    private final UserService userService;
    private final PlaceService placeService;

    @GetMapping("/{userId}/{placeId}")
    public PlaceDto.AfterVoting getPlaceInfo(@PathVariable int userId,
                                             @PathVariable int placeId){
        PlaceDto.Response nowPlace =placeService.getPlaceInfo(Long.valueOf(placeId));
        Timestamp timestamp = userService.getUserInputTime(Long.valueOf(userId));

        return PlaceDto.AfterVoting.builder()
                .PlaceInfo(nowPlace)
                .NowUserInputTime(timestamp)
                .build();
    }

    @PostMapping("/{userId}/{placeId}/boting")
    public PlaceDto.AfterVoting VotingPlace(@PathVariable int userId,
                                            @PathVariable int placeId,
                                            @RequestBody Map map){
        PlaceDto.Response updatePlace = placeService.updateByVoting(
                                            Long.valueOf(placeId),
                                            Integer.valueOf(map.get("how").toString()));
        Timestamp timestamp = userService.updateUserInputTime(Long.valueOf(userId));

        return PlaceDto.AfterVoting.builder()
                .PlaceInfo(updatePlace)
                .NowUserInputTime(timestamp)
                .build();
    }


}
