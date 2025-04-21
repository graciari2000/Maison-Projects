package controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import models.User;
import services.EmailService;
import services.UserService;
import repositories.UserRepository;

import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final EmailService emailService;
    private final UserRepository userRepository;  // Inject UserRepository

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();  // For password hashing

    public UserController(UserService userService, EmailService emailService, UserRepository userRepository) {
        this.userService = userService;
        this.emailService = emailService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        // Hash the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save the user to the database
        userRepository.save(user);

        // Generate a verification token
        String token = UUID.randomUUID().toString();
        
        // Send email with verification token
        emailService.sendVerificationEmail(user.getEmail(), token);

        return ResponseEntity.ok("User registered! Check your email.");
    }
}