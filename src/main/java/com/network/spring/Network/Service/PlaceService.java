package com.network.spring.Network.Service;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.Entity.Place;
import com.network.spring.Network.Entity.User;
import com.network.spring.Network.Repository.PlaceRepository;
import com.network.spring.Network.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    @Transactional
    public PlaceDto.Response createPlace(PlaceDto.Request request) {
        Place place = Place.builder()
                .name(request.getName())
                .tmp(request.getTmp())
                .build();
        placeRepository.save(place);
        return PlaceDto.Response.fromEntity(place);
    } //fin

}
