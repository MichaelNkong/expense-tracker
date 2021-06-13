package com.expense.tracker.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.tracker.app.model.Role;

public interface RoleRepositoy extends JpaRepository<Role,Long> {
		
}
