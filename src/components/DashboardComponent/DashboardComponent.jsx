import React, { Component } from 'react';
import {Nav,NavItem, NavbarBrand,NavLink,Navbar} from 'reactstrap';
class DashboardComponent extends Component {
    state={}
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
                      <NavLink href="/user/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/user/register">Sign Up</NavLink>
                    </NavItem>
                    
                  </Nav>
                  
        
              </Navbar>
            </div>
          );
    }
                
            
        
    
}

export default DashboardComponent;