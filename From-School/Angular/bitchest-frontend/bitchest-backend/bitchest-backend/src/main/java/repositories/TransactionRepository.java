package repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import models.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(Long userId);
}