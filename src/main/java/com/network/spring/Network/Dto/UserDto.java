package com.network.spring.Network.Dto;

import com.network.spring.Network.Entity.User;
import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.lang.Nullable;

import java.sql.Timestamp;
import java.util.List;

public class UserDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Login {
        @NotNull
        private String Email;
        @NotNull
        private String Password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request {
        @NotNull
        private String Name;
        @NotNull
        private String Email;
        @NotNull
        private String Password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Response {
        @NotNull
        private Long UserId;
        @NotNull
        private String Name;
        @NotNull
        private String Email;
        @NotNull
        private String Password;
        @Nullable
        private Timestamp InputTime;

        public static Response fromEntity(User user) {
            return Response.builder()
                    .UserId(user.getId())
                    .Name(user.getName())
                    .Email(user.getEmail())
                    .Password(user.getPassword())
                    .InputTime(user.getInputtime())
                    .build();
        }
    }

}
