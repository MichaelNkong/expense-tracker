package com.expense.tracker.app.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.tracker.app.model.Category;
import com.expense.tracker.app.repository.CategoryRespository;
import com.sun.el.stream.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
     @Autowired
	private CategoryRespository categoryRepository;
     
     @GetMapping("/categories")
    public  Collection<Category> categories(){
    	   return categoryRepository.findAll();
      }
     @GetMapping("/category/{id}")
     public  ResponseEntity<?> getCategory(@PathVariable Long id){
     	   java.util.Optional<Category> category =categoryRepository.findById(id);
     	   return category.map(response ->ResponseEntity.ok().body(response))
     			   .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
       }
     @PostMapping("/createCategory")
     ResponseEntity<Category> createCategory( @RequestBody Category category) throws URISyntaxException{
    	 
    	  Category result = categoryRepository.save(category);
    	  return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);
    	 
     }
     @PutMapping("/updateCategory/{id}")
     ResponseEntity<Category> updateCategory(@RequestBody Category category) throws URISyntaxException{
    	 
    	  Category result = categoryRepository.save(category);
    	  return ResponseEntity.ok().body(result);
    	 
     }
     @DeleteMapping("/deleteCategory/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id){
    	 categoryRepository.deleteById(id);
    	 return ResponseEntity.ok().build();
    	 
     }
     
	
	
}
