import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Table,Container,Form, FormGroup, Button,  Label, Input, FormText } from 'reactstrap';
const CATEGORY_BASE_URL= "http://localhost:8080/api/categories";
const Expense_BASE_URL= "http://localhost:8080/api/expenses";
class ExpenseComponent extends Component {
    
    emptyItem={
        description:'',
        location:'',
        title: '',
        category:{
            id:'4',
            name:''
        }

     }
     constructor(props){
       super(props)
       this.state={ 
        isLoading:true,
        expenseDate : new Date(),
        expenses:[],
        categories:[],
        item:this.emptyItem
                }
       
       this.titleHandler=this.titleHandler.bind(this);
       this.decriptionHandler=this.descriptionHandler.bind(this);
       this.locationHandler=this.locationHandler.bind(this);
       this.categoryHandler=this.categoryHandler.bind(this);
       //this.save=this.save.bind(this);
            }
 
        
   
     componentDidMount(){
    
            axios.get(Expense_BASE_URL).then( res =>

                this.setState({
                        expenses:res.data,
                        isLoading:false

                })    
        );
     }
     componentDidMount(){
    
        axios.get(CATEGORY_BASE_URL).then( res =>

            this.setState({
                    categories:res.data,
                    isLoading:false

            })    
    );
 }
    

     cancel = (event)=>{
        event.prevendDefault();
    }
    save =(event) =>{
        event.prevendDefault();
        //let expense ={description:this.state.item.description,expensedate:this.state.item.expenseDate,location:this.state.item.location,categoryid:this.state.item.category.id}
                       
        console.log(this.state.item.description);
        }

    descriptionHandler =(event) =>{
          
          let item = {...this.state.item};
          let val = event.target.value;
          item.description = val;
          this.setState(
            {item}
          )
          console.log(this.state.item); 
          
    }
    titleHandler =(event)=>{
      
        let item = {...this.state.item};
          let val = event.target.value;
          item.title = val;
          this.setState(
            {item}
          )
          console.log(this.state.item); 
          
    }
    locationHandler =(event)=>{
        
        let item = {...this.state.item};
          let val = event.target.value;
          item.location = val;
          this.setState(
            {item}
          )
          console.log(this.state.item); 
          

    }
    categoryHandler =(event)=>{
        let item = {...this.state.item};
          let val = event.target.value;
          item.category.name = val;
          this.setState(
            {item}
          )
          console.log(this.state.item); 
    }
    handleDateChange = (date) =>{
    
        this.setState(
          {
             expenseDate:date
          }

        )
        console.log(this.state.expenseDate);
    }
    getTitle(){return <h3 className="text-center">Add Expenses</h3>}
    
    render() {
    const  title=<h3 className="text-center">Add Expenses</h3>
    const {expenses,categories,isLoading}=this.state;
    let optionList= 
        categories.map( cat =>
        <option  key={cat.id}  id={cat.id}>
         
               {cat.name}
                  
              
         </option>
            )
            let rows=expenses.map(expense =>
                <tr key={expense.id}>
                    <td>{expense.description} </td>
                   <td>{expense.location}</td>
                    <td>{expense.expensedate}</td>
                    <td><button className="btn-danger" onClick={()=>this.deleteExpense(expense.id)}>Delete</button></td>
                 </tr>
                 )
            
    
    if(isLoading)
    return(<div>loading..</div>);
        return (
           
            <div>
                
                <Navigation/>
                <div className = "container mt-4">
                    {this.getTitle()}
                        <div className = "row">
                            
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form onSubmit={this.save}>
                            
                            <div className="form-group ">
                            <label> Expense Date: </label><br></br>
                              <DatePicker 
                                 selected={ this.state.expenseDate }
                              onChange={ this.handleDateChange }
                                  //name="expenseDate"
                                    dateFormat="MM/dd/yyyy"
                                    />
                                  </div>

                                        
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" 
                                            //name="description" 
                                            className="form-control" 
                                                value={this.state.item.description}
                                                onChange={this.descriptionHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> location: </label>
                                            <input placeholder="location" 
                                           // name="location" 
                                            className="form-control" 
                                                value={this.state.item.location} 
                                            onChange={this.locationHandler}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label>Categories:</label>
                                           <select className="form-control" value={this.state.item.category.name} 
                                           onChange={this.categoryHandler} 
                                           >{optionList}</select> 
 
                                        </div>

                                        <input className="btn btn-primary" type="submit" value="save" />
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                {' '}
                <Container>
                            <h3>Expense List</h3>
                            <Table className="mt-4">
                                <thead>
                                <tr>
                                   <th>Description</th>
                                   <th>Location</th>
                                  <th>Expense Date</th>
                                  <th>Action</th>
                                  </tr>
                                  </thead>
                                
                                <tbody>
                                   {rows}
                                </tbody>

                            





                            </Table>



                </Container>
            </div>
        );
    }
}

export default ExpenseComponent;