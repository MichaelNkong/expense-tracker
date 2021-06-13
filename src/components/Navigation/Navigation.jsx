import React, { Component } from 'react';
import {Nav,NavItem, NavbarBrand,NavLink,Navbar} from 'reactstrap';

class Navigation extends Component {
   
    render() {
        return (
            <div>
              <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/home">Expense Tracker Application</NavbarBrand>
               
                   <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/categories">Categories</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/expenses">Expenses</NavLink>
                    </NavItem>
                    
                  </Nav>
                  
        
              </Navbar>
            </div>
          );
    }
}

export default Navigation;