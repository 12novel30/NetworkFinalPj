package com.network.spring.Network.Service;

import com.network.spring.Network.Dto.PlaceDto;
import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.Entity.Place;
import com.network.spring.Network.Entity.User;
import com.network.spring.Network.ErrorHandling.DefaultException;
import com.network.spring.Network.Repository.PlaceRepository;
import com.network.spring.Network.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.network.spring.Network.ErrorHandling.ErrorCode.NO_PLACE;
import static com.network.spring.Network.ErrorHandling.ErrorCode.NO_USER;

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

    @Transactional
    public PlaceDto.Response updateByBoting(Long placeId, int how) {
        Place place = placeRepository.findById(Long.valueOf(placeId))
                .orElseThrow(() -> new DefaultException(NO_PLACE));

        if (how == 0)
            place.setGood(place.getGood() + 1);
        if (how == 1)
            place.setHot(place.getHot() + 1);
        if (how == -1)
            place.setCool(place.getCool() + 1);

        return PlaceDto.Response.fromEntity(placeRepository.save(place));
    } //fin

    @Transactional
    public PlaceDto.Response updateTemperature(Long placeId, Long newTemp) {
        Place place = placeRepository.findById(Long.valueOf(placeId))
                .orElseThrow(() -> new DefaultException(NO_PLACE));

        place.setTmp(newTemp);
        place.setHot(Long.valueOf(0));
        place.setCool(Long.valueOf(0));
        place.setGood(Long.valueOf(0));

        return PlaceDto.Response.fromEntity(placeRepository.save(place));
    } //fin


    @Transactional
    public List<PlaceDto.Response> getAllPlaceForAdmin(){
        List<Place> placeList = placeRepository.findAll();
        List<PlaceDto.Response> response = new ArrayList<>();
        for (Place p : placeList){
            response.add(PlaceDto.Response.fromEntity(p));
        }
        return response;
    }
}
