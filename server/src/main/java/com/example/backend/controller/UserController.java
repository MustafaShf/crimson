package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/register")
@CrossOrigin(origins = "*") // Allow CORS for frontend request
public class UserController {

    @PostMapping
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Map<String, String> userData) {
        // Extracting data from request body
        String name = userData.get("name");
        String email = userData.get("email");
        String password = userData.get("password");

        // Debugging - Print received data
        System.out.println("Received Name: " + name);
        System.out.println("Received Email: " + email);
        System.out.println("Received Password: " + password);

        // Respond with success message
        Map<String, String> response = Map.of("message", "User registered successfully!");

        return ResponseEntity.ok(response);
    }
}
