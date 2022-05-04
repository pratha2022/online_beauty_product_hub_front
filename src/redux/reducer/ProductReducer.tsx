import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../types/ProductTypes';
import { FETCH_SHOP_REQUEST, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILURE } from '../types/ProductTypes';
const initialStateProduct = {
    loading: false,
    product: [],
    error: ''
}
export const ProductReducer = (state = initialStateProduct, action: any) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                loading: false,
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                product: [],
            }
        default: return state;
    }
}
const initialStateShop = {
    loading: false,
    shop: [],
    error: ''
}
export const ShopReducer = (state = initialStateShop, action: any) => {
    switch (action.type) {
        case FETCH_SHOP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SHOP_SUCCESS:
            return {
                ...state,
                shop: action.payload,
                loading: false,
            }
        case FETCH_SHOP_FAILURE:
            return {
                loading: false,
                shop: [],
                error: action.payload
            }
        default: return state;
    }
}