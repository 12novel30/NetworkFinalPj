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
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    @Transactional
    public PlaceDto.Response createPlace(PlaceDto.Request request) {
        Place place = Place.builder()
                .name(request.getName())
                .tmp(request.getTmp())
                .hot(Long.valueOf(0))
                .cool(Long.valueOf(0))
                .good(Long.valueOf(0))
                .build();
        placeRepository.save(place);
        return PlaceDto.Response.fromEntity(place);
    } //fin

    @Transactional
    public List<PlaceDto.MainView> getAllPlace(){
        List<Place> placeList = placeRepository.findAll();
        List<PlaceDto.MainView> response = new ArrayList<>();
        for (Place p : placeList){
            response.add(PlaceDto.MainView.fromEntity(p));
        }
        return response;
    }

    @Transactional
    public PlaceDto.Response getPlaceInfo(Long placeId) {
        return PlaceDto.Response.fromEntity(placeRepository.findById(placeId).get());
    } //fin

}
