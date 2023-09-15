package com.mars.missingalert.repository;

import com.mars.missingalert.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String username);

    List<User> findByCity(String city);
}
