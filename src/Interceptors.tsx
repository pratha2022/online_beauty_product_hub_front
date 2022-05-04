import axios from 'axios-observable';
axios.defaults.baseURL = `http://192.168.10.167:1337/api`;
// Request interceptor
axios.interceptors.request.use((config: any) => {
    let jwt = localStorage.getItem('jwt');
    const Authorization = 'Authorization';
    const Accept = 'Accept';
    const ContentType = 'Content-Type';
    if (jwt && jwt !== '') {
        config.headers[Authorization] = 'Bearer ' + jwt;
    }
    config.headers[Accept] = 'application/json';
    config.headers[ContentType] = 'application/json';
    return config;
}, (error: any) => {
    // Do something with request error
    return Promise.reject(error);
});
// Response interceptor
axios.interceptors.response.use((response: any) => {
    // Do something with response data
    return response;
}, (error: any) => {
    if (error?.response?.status === 401) {
        window.location.href = 'Logout';
    } else {
        return Promise.reject(error);
    }
});