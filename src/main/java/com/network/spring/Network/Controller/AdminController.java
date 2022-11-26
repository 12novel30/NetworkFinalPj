package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminController {

    private final PlaceService placeService;
    @GetMapping("/admin")
    public List<PlaceDto.Response> getAllPlaceInfoForAdmin(){
        return placeService.getAllPlaceForAdmin();
    }

    @PostMapping("/admin/{placeId}/updateTemp")
    public PlaceDto.Response updateTemperature(@PathVariable int placeId,
                                                  @RequestBody Map map){

        return placeService.updateTemperature(Long.valueOf(placeId),
                Long.valueOf(map.get("newTemp").toString()));
    }
}
