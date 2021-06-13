
import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import ExpenseComponent from './components/Expenses/ExpenseComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

class App extends Component {
  state={}
  render() {
    return (
    
    <Router>
         <Switch>
             <Route path="/" exact={true} component={DashboardComponent}/> 
             <Route path="/home" exact={true} component={HomeComponent}/> 
             <Route path="/categories" exact={true} component={CategoryComponent}/>
             <Route path="/expenses" exact={true} component={ExpenseComponent}/>
             <Route path="/user/login" exact={true} component={Login}/>
             <Route path="/user/register" exact={true} component={Register}/>
          </Switch>

     </Router>
        
    
    );
  }
}

export default App;

