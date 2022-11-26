package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.ErrorHandling.DefaultException;
import com.network.spring.Network.Service.PlaceService;
import com.network.spring.Network.Service.UserService;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static com.network.spring.Network.ErrorHandling.ErrorCode.ALREADY_REGISTERED;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class HomeController {
    private final PlaceService placeService;
    @PostMapping(value = "/createPlace")
    public ResponseEntity<PlaceDto.Response> createPlace(@RequestBody Map map) {
        PlaceDto.Request request = PlaceDto.Request.builder()
                .Name(map.get("Name").toString())
                .Tmp(Long.valueOf(map.get("Temperature").toString()))
                .build();
        return ResponseEntity.ok(placeService.createPlace(request));
    }

    @GetMapping("/main")
    public List<PlaceDto.MainView> getAllPlaceInfo(){
        return placeService.getAllPlace();
    }
}
