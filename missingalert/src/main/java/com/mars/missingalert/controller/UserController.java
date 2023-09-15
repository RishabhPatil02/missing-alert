package com.mars.missingalert.controller;


import com.mars.missingalert.model.Alert;
import com.mars.missingalert.model.LoginRequest;
import com.mars.missingalert.model.User;
import com.mars.missingalert.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/userlist")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public ResponseEntity<User> confirmUser(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        System.out.println(username+" "+password);
        User user = userRepository.findByUsername(username);
        if (user == null) {
            // User not found in the database
            return ResponseEntity.notFound().build();
        }
        if (user.getPassword().equals(password)) {
            // Passwords match, return the user information
            return ResponseEntity.ok(user);
        } else {
            // Passwords do not match
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


}
