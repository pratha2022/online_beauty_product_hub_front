import axios from 'axios';
export const registerationAPI = (data: any) => {
    return axios.post('/auth/local/register', data)
}