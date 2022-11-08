package com.network.spring.Network.Repository;

import com.network.spring.Network.Entity.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long>{
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String Email);
    Optional<User> findById(Long no);
    void deleteById(Long id);
}
