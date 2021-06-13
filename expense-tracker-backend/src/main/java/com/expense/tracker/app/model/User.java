package com.expense.tracker.app.model;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="user", uniqueConstraints = {@UniqueConstraint(columnNames="name"), @UniqueConstraint(columnNames="email")}) 
public class User {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	
	@Column(name="name")
	private String name;
    
   
    @Column( name="email")
	private String email;
     
   
    @Column(name="password")
    private String password;
   
    @ManyToMany(targetEntity=Role.class, cascade= CascadeType.ALL)
	@JoinColumn(	name = "user_roles", 
			referencedColumnName="id")
	private Set<Role> roles;
   
   @OneToMany(targetEntity=Expense.class, cascade= CascadeType.ALL)
   @JoinColumn(name="user_id", referencedColumnName="id")
   private Set<Expense> expenses;
	
	public User( String name, String email,String passwort) {
	
		this.name = name;
		this.email = email;
		this.password=passwort;
	}
	
	public User() {}

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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPasswort() {
		return password;
	}

	public void setPasswort(String passwort) {
		this.password = passwort;
	}
	
	
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	

	
}
