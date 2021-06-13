import react, {Component} from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
const CATEGORY_BASE_URL= "http://localhost:8080/api/categories";
class CategoryComponent extends Component {
    constructor(props){
           super(props)
           this.state={
                categories : [], 
                isLoading:true
             }
        }

    //async you send a request then you dont wait...
 componentDidMount(){

    axios.get(CATEGORY_BASE_URL).then( res =>

                this.setState({
                    categories:res.data,
                    isLoading:false
                })
           );
    
           console.log(this.state.categories);

    }
    
    render() {
        

        const {categories , isLoading} =this.state;
        if(isLoading)
        return (<h1>is Loading</h1>);
        return (
           <div>
               
               <Navigation/>
               <h2>categories</h2>
                   {

                       categories.map( mycategory=>
                            <div id= {mycategory.id}>

                                 {mycategory.name}
                            </div>

                       )

                   }



           </div>
        );
    }
}
export default CategoryComponent;