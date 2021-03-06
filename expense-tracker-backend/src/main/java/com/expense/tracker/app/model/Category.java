package com.expense.tracker.app.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	
	@Id
	private Long id;
	@Column(name="name")
   private String name;
	
     @OneToMany(targetEntity=Expense.class, cascade= CascadeType.ALL)
	 @JoinColumn(name="category_id", referencedColumnName="id")
	  private Set<Expense> expenses;
    public Category() {}

	public Category( String name) {

		 
		this.name = name;
	}
    
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name; 
	}
	

}
