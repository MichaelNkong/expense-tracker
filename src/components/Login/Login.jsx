import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Container, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import DashboardComponent from '../DashboardComponent/DashboardComponent';

class Login extends Component {

    constructor(props){
        super(props);
    this.state=this.initialState;

    }
    initialState={
         name:'',
         email:'',
         password:''

    }
    render() {
       const {name,email,password}=this.state;
        return (
         
            <div>
                  <DashboardComponent/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Sign In </h3>
                                <div className="card-body">
                                  <form>
                                      <div className="form-group">
                                          <label >First Name:</label>
                                          <input placeholder = "First Name"  type="text" name="firstname" className="form-control"/>

                                     </div>
                                        <div className="form-group">
                                          <label>Last Name:</label>
                                          <input placeholder="email"  type="text" name="lastname" className="form-control"/>

                                       </div>
                                     <div className="form-group">
                                          <label >Password:</label>
                                          <input placeholder="Password" type="password" name="password" className="form-control"/>

                                     </div>
                                 <button className="btn btn-success" >Submit</button>
                                 <button className="btn btn-danger" style ={{marginLeft:"10px"}}>reset</button>
                                  </form>


                                </div>

                        </div>

                    </div>


                </div>
                
            </div>
          );
    }
}

export default Login;