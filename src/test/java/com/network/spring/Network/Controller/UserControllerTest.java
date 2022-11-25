package com.network.spring.Network.Controller;

import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.Service.UserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Commit;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserControllerTest {
    @Autowired(required = true)
    private UserService userservice;
    @Autowired(required = true)
    private UserController userController;

    @Test
    @Commit
    @DisplayName("회원가입")
    void createUser() {
        //given
        String Name = "haeun3";
        String Email = "leehaeun3@gm.gist.ac.kr";
        String Password = "20205149";

        //when
        Map map = new HashMap<>();
        map.put("Name", Name);
        map.put("Email", Email);
        map.put("Password", Password);

        //then
        System.out.println(ResponseEntity.ok(userController.createUser(map)));
    }


    @Test
    void login() {
    }
}