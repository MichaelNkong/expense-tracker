package com.expense.tracker.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.tracker.app.model.Category; 
@Repository
public interface CategoryRespository extends JpaRepository<Category,Long> {

	Category findByName(String name); 
}
