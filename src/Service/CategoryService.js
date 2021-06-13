import axios from 'axios';
const CATEGORY_BASE_URL= "http://localhost:8080/api/categories";
class CategoryService{
 getCategories(){
                 return axios.get(CATEGORY_BASE_URL);
                }

}

export default new CategoryService()