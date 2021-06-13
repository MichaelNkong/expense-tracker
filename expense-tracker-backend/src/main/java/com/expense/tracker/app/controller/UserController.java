package com.expense.tracker.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.expense.tracker.app.model.Status;
import com.expense.tracker.app.model.User;
import com.expense.tracker.app.repository.UserRepository;
import java.util.List;

@Controller
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	  @PostMapping("/user/register")
	    public ResponseEntity<String>  registerUser(@RequestBody User newUser) {
	       User user= userRepository.save(newUser);
	       return ResponseEntity.ok("registered");
	       
	    }
}
