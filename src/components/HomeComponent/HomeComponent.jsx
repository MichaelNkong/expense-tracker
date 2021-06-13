import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';


class HomeComponent extends Component {


    
    render() {
        return (
            <div>
            <Navigation/>
           <h2 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>Welcome to My Easy Expense Tracker Application!</h2> 
           </div>
        );
    }
}

export default HomeComponent;