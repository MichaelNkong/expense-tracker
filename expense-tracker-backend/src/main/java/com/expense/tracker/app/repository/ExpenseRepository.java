package com.expense.tracker.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.tracker.app.model.Category;
import com.expense.tracker.app.model.Expense;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense,Long> {
	Optional<Expense> findById(Long id); 

}
