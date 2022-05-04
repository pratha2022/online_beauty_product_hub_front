import axios from 'axios';
export const loginAPI = (data: any) => {
         return  axios.post('/auth/local', data)
}