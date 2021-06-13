package com.expense.tracker.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.expense.tracker.app.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	Optional<User> findByname(String name);

	Boolean existsByname(String name);

	Boolean existsByEmail(String email);

}
