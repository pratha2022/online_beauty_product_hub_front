import axios from 'axios'
export const categoryGetAPI = () => {
   return  axios.get('/categories');
}