package com.homemadepickles.controller;

import com.homemadepickles.model.User;
import com.homemadepickles.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody Map<String, String> credentials) {
        return userService.login(credentials.get("email"), credentials.get("password"))
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable(name = "id") String id) {
        return userService.getUserById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }
}
