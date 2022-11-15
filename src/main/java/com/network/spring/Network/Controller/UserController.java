package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.ErrorHandling.DefaultException;
import com.network.spring.Network.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.network.spring.Network.ErrorHandling.ErrorCode.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userservice;

    @PostMapping(value = "/register")
    public ResponseEntity<UserDto.Response> createUser(UserDto.Request request) {
        if (!userservice.checkIsEmailRegistered(request.getEmail())) {
            return ResponseEntity.ok(userservice.createUser(request));
        } else throw new DefaultException(ALREADY_REGISTERED);
    }

    @PostMapping(value = "/login")
    public UserDto.Response login(UserDto.Login loginUser) {
        return userservice.login(loginUser);
    }
}
