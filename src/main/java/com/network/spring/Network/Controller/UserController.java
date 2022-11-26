package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.ErrorHandling.DefaultException;
import com.network.spring.Network.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.network.spring.Network.ErrorHandling.ErrorCode.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userservice;

    @GetMapping("/get/hello") // for test
    public String GetMappingTest (@RequestParam int id) {
        return "Get Mapping : " + id;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<UserDto.Response> createUser(@RequestBody Map map) {
        UserDto.Request request = UserDto.Request.builder()
                .Email(map.get("Email").toString())
                .Password(map.get("Password").toString())
                .IsAdmin(Boolean.valueOf(map.get("IsAdmin").toString()))
                .build();
        if (!userservice.checkIsEmailRegistered(request.getEmail())) {
            return ResponseEntity.ok(userservice.createUser(request));
        } else throw new DefaultException(ALREADY_REGISTERED);
    }
    @PostMapping(value = "/login")
    public UserDto.Response login(@RequestBody Map map) {
        UserDto.Login login = UserDto.Login.builder()
                .Email(map.get("Email").toString())
                .Password(map.get("Password").toString())
                .build();
        return userservice.login(login);
    }

}
