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
    public PlaceDto.Response getPlaceInfo(@PathVariable int placeId){
        return placeService.getPlaceInfo(Long.valueOf(placeId));
    }

    @PostMapping("/{userId}/{placeId}/boting")
    public PlaceDto.AfterBoting botingPlace(@PathVariable int userId,
                                            @PathVariable int placeId,
                                            @RequestBody Map map){
        PlaceDto.Response updatePlace = placeService.updateByBoting(
                                            Long.valueOf(placeId),
                                            Integer.valueOf(map.get("how").toString()));
        Timestamp timestamp = userService.updateUserInputTime(Long.valueOf(userId));

        return PlaceDto.AfterBoting.builder()
                .PlaceInfo(updatePlace)
                .NowUserInputTime(timestamp)
                .build();
    }


}
