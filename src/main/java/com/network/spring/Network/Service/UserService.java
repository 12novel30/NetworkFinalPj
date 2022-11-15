package com.network.spring.Network.Service;

import com.network.spring.Network.Dto.UserDto;
import com.network.spring.Network.Entity.User;
import com.network.spring.Network.ErrorHandling.DefaultException;
import com.network.spring.Network.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import static com.network.spring.Network.ErrorHandling.ErrorCode.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public UserDto.Response createUser(UserDto.Request request) {
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();
        userRepository.save(user);
        return UserDto.Response.fromEntity(user);
    } //fin

    public boolean checkIsEmailRegistered(String email){
        return userRepository.existsByEmail(email);
    }
    public UserDto.Response login(UserDto.Login loginUser) {
        User entity = userRepository.findByEmail(loginUser.getEmail())
                .orElseThrow(() -> new DefaultException(WRONG_EMAIL));
        if (loginUser.getPassword().equals(entity.getPassword()))
            return UserDto.Response.fromEntity(entity);
        else throw new DefaultException(WRONG_PASSWORD);
    } //ing
}
