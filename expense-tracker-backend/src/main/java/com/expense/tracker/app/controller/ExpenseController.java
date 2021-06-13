package com.expense.tracker.app.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.tracker.app.model.Expense;
import com.expense.tracker.app.repository.ExpenseRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ExpenseController {
      @Autowired
	  private ExpenseRepository expenseRepository;

      @GetMapping("/expense/{id}")
  public ResponseEntity<?> getExpense(@PathVariable Long id){
    	  Optional<Expense> response = expenseRepository.findById(id);
    	  return response.map(result->ResponseEntity.ok().body(result))
    			  .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    	  
     }
      
      @GetMapping("/expenses")
   public Collection<Expense>  getExpenses(){
    	  return expenseRepository.findAll();
     }
      @PostMapping("/createExpense")
    public ResponseEntity<Expense> getExpenses(@RequestBody Expense expense) throws URISyntaxException{
    	  Expense response= expenseRepository.save(expense);
    	  return ResponseEntity.created(new URI("/api/expense/" + response.getId())).body(response);
    	  
      }
      @DeleteMapping("/expense/{id}")
      public ResponseEntity<?> deleteExpense(@PathVariable Long id){
        	  expenseRepository.deleteById(id);
        	return  ResponseEntity.ok().build();
        	  
         }
}
