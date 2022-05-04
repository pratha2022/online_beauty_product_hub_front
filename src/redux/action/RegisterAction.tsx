import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_FAILURE } from '../types/RegisterTypes';
import { registerationAPI } from '../service/registrationservice/index';
export const fetchRegisterRequest = () => {
    return {
        type: FETCH_REGISTER_REQUEST
    }
}
export const fetchRegisterSuccess = (data: any) => {
    return {
        type: FETCH_REGISTER_SUCCESS,
        payload: data
    }
}
export const fetchRegisterFailure = (error: any) => {
    return {
        type: FETCH_REGISTER_FAILURE,
        payload: error
    }
}
export const registerAction = (data: any, onSuccess: any) => {
    return (dispatch: any) => {
        dispatch(fetchRegisterRequest)
        registerationAPI(data)
            .then(response => {
                const register = response.data.user;
                if (response.status === 200) {
                    localStorage.setItem('jwt', response.data.jwt)
                    dispatch(fetchRegisterSuccess(register));
                    onSuccess()
                }
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchRegisterFailure(errorMsg))
            })
    }
}