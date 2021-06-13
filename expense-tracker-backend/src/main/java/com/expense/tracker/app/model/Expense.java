package com.expense.tracker.app.model;

import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="expense")
public class Expense {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="expensedate")
	private Instant expensedate;
	
	@Column(name="description")
	private String description;
	
	@Column(name="location")
	private String location;
	
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	private User user;
	
	public Expense(Instant expensedate, String description,String locatiob) {
		
	
		this.expensedate = expensedate;
		this.description = description;
		this.location=location;
	}

	public Expense() {}

	public Long getId() {
		return id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getExpensedate() {
		return expensedate;
	}

	public void setExpensedate(Instant expensedate) {
		this.expensedate = expensedate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	

}
