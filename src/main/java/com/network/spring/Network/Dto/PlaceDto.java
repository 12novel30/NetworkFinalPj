package com.network.spring.Network.Dto;

import com.network.spring.Network.Entity.Place;
import com.network.spring.Network.Entity.User;
import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.lang.Nullable;

import java.security.Timestamp;

public class PlaceDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request {
        @NotNull
        private String Name;
        @NotNull
        private Long Tmp;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {
        @NotNull
        private Long Id;
        @NotNull
        private String Name;
        @NotNull
        private Long Tmp;
        @Nullable
        private Long Hot;
        @Nullable
        private Long Cool;
        @Nullable
        private Long Good;

        public static PlaceDto.Response fromEntity(Place place) {
            return Response.builder()
                    .Id(place.getId())
                    .Name(place.getName())
                    .Tmp(place.getTmp())
                    .Hot(place.getHot())
                    .Cool(place.getCool())
                    .Good(place.getGood())
                    .build();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class MainView {
        @NotNull
        private Long Id;
        @NotNull
        private String Name;
        @NotNull
        private Long Tmp;
        @Nullable
        private String Most;
        @Nullable
        private Long Cool;
        @Nullable
        private Long Good;

        public static PlaceDto.MainView fromEntity(Place place) {
            return MainView.builder()
                    .Id(place.getId())
                    .Name(place.getName())
                    .Tmp(place.getTmp())
                    .Hot(place.getHot())
                    .Cool(place.getCool())
                    .Good(place.getGood())
                    .build();
        }
    }
}

