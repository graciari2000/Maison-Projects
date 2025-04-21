package controllers;

import models.Portfolio;
import services.PortfolioService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// REST Controller to handle portfolio-related API requests
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    // Endpoint to fetch a user's portfolio based on user ID
    @GetMapping("/{userId}")
    public List<Portfolio> getUserPortfolio(@PathVariable Long userId) {
        return portfolioService.getPortfolioByUser(userId);
    }
}
