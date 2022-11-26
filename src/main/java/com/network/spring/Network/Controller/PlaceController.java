package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping("/{placeId}")
    public PlaceDto.Response getPlaceInfo(@PathVariable int placeId){
        return placeService.getPlaceInfo(Long.valueOf(placeId));
    }

}
