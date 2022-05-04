import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../types/CartTypes';
import { FETCH_CARTID_REQUEST, FETCH_CARTID_SUCCESS, FETCH_CARTID_FAILURE } from '../types/CartIdTypes';
import { cartDeleteAPI, cartGetAPI, cartPopulateAPI, cartPostAPI, cartupdateAPI } from '../service/cartservice/index';
export const fetchCartRequest = () => {
    return {
        type: FETCH_CART_REQUEST
    }
}
export const fetchCartSuccess = (cart: any) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: cart
    }
}
export const fetchCartFailure = (error: any) => {
    return {
        type: FETCH_CART_FAILURE,
        payload: error
    }
}
export const fetchCartIdRequest = () => {
    return {
        type: FETCH_CARTID_REQUEST
    }
}
export const fetchCartIdSuccess = (cartID: any) => {
    return {
        type: FETCH_CARTID_SUCCESS,
        payload: cartID
    }
}
export const fetchCartIdFailure = (error: any) => {
    return {
        type: FETCH_CARTID_FAILURE,
        payload: error
    }
}
export const cartId = (id: any, num: any, onSuccess: any) => {
    return async (dispatch: any) => {
        dispatch(fetchCartIdRequest)
        await cartPostAPI(id.id, num)
            .then(response => {
                const cartId = response.data.data;
                console.log("cart postr call", cartId);
                if (response.status === 200) {
                    dispatch(fetchCartIdSuccess(cartId))
                    onSuccess()
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCartIdFailure(errorMsg))
            })
    }
}
export const cartUpdate = (id: any, num: any, cartdata: any, cartdataid: any, onSuccess: any) => {
    return (dispatch: any) => {
        dispatch(fetchCartIdRequest)
        cartupdateAPI(id, num, cartdata, cartdataid)
            .then(response => {
                const cartId = response?.data?.data;
                if (response.status === 200) {
                    dispatch(fetchCartIdSuccess(cartId))
                    onSuccess()
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCartIdFailure(errorMsg))
            })
    }
}
export const cartIdAction = (data: any) => {
    return (dispatch: any) => {
        dispatch(fetchCartIdRequest)
        cartGetAPI(data)
            .then(response => {
                const carts = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchCartIdSuccess(carts))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCartIdFailure(errorMsg))
            })
    }
}
export const cartAction = (cartdata: any) => {
    const user_id = localStorage.getItem('user_details')
    return (dispatch: any) => {
        dispatch(fetchCartRequest)
        cartPopulateAPI(user_id)
            .then(response => {
                const cart = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchCartSuccess(cart))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCartFailure(errorMsg))
            })
    }
}
export const cartDelete = (id: any, item: any, qty: any, cartID: any) => {
    return (dispatch: any) => {
        dispatch(fetchCartIdRequest)
        cartDeleteAPI(id, item, qty, cartID)
            .then(response => {
                console.log(response.data.data, "fjoiahrfoirahe");
                if (response.status === 200) {
                    dispatch(cartAction(cartID[0].id))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCartIdFailure(errorMsg))
            })
    }
}