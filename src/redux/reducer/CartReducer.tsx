import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../types/CartTypes';
const initialState = {
    loading: false,
    cart: [],
    error: ''
}
export const CartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CART_SUCCESS:
            return {
                loading: false,
                cart: action.payload,
                error: ''
            }
        case FETCH_CART_FAILURE:
            return {
                loading: false,
                cart: [],
                error: action.payload
            }
        default: return state;
    }
}