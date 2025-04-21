package services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private final JavaMailSender mailSender;

    // Constructor to inject JavaMailSender dependency
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Send verification email with the provided token
    public void sendVerificationEmail(String to, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Email Verification");
        message.setText("Click the link to verify your email: http://localhost:4200/verify?token=" + token);
        mailSender.send(message); // Send the email
    }
}