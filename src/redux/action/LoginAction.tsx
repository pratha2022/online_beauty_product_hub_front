import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from '../types/LoginTypes';
import {loginAPI} from '../service/loginservice/index';
export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}
export const fetchLoginSuccess = (data: any) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: data
    }
}
export const fetchLoginFailure = (error: any) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}
export const LoginAction = (data: any, onSuccess: any) => {
    return (dispatch: any) => {
        dispatch(fetchLoginRequest)
        loginAPI(data)
            .then(response => {
                const login = response.data.user;
                localStorage.setItem('jwt', response.data.jwt);
                localStorage.setItem('user_details', login.id)
                if (response.status === 200) {
                    dispatch(fetchLoginSuccess(login));
                    onSuccess()
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchLoginFailure(errorMsg))
            })
    }
}
