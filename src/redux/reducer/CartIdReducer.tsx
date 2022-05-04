import { FETCH_CARTID_REQUEST, FETCH_CARTID_SUCCESS, FETCH_CARTID_FAILURE } from '../types/CartIdTypes';
const initialState = {
    loading: false,
    cartID: [],
    error: ''
}
export const CartIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CARTID_REQUEST:
            return {
                ...state,
                loading: true

            }
        case FETCH_CARTID_SUCCESS:
            return {
                ...state,
                loading: false,
                cartID: action.payload,
                error: ''
            }
        case FETCH_CARTID_FAILURE:
            return {
                loading: false,
                cartID: [],
                error: action.payload
            }
        default: return state;
    }
}