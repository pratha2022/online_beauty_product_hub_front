import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from '../types/LoginTypes';
const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const LoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_LOGIN_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state;
    }
}