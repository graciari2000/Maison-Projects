package services;

import org.springframework.stereotype.Service;
import models.User;
import repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Register user with password hashing
    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("Username already exists!"); // Handle duplicate users
        }

        user.setPassword(passwordEncoder.encode(user.getPassword())); // Hash password before saving
        return userRepository.save(user); // Save the user to the database
    }

    // Corrected findByUsername method to return User
    public User findByUsername(String username) {
        return userRepository.findByUsername(username); // Correctly find by username
    }
}
