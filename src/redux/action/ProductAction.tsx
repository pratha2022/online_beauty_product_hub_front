import { shopQueryAPI, shopProductAPI, productGetAPI, productFilterGetAPI, productFavouriteGetAPI, productPostAPI, productDeleteAPI } from '../service/productservice/index';
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../types/ProductTypes';
import { FETCH_SHOP_REQUEST, FETCH_SHOP_SUCCESS, FETCH_SHOP_FAILURE } from '../types/ProductTypes';
export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
export const fetchProductSuccess = (product: any) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}
export const fetchProductFailure = (error: any) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}
export const productAction = (id: any) => {
    return (dispatch: any) => {
        dispatch(fetchProductRequest)
        productGetAPI(id)
            .then(response => {
                const product = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchProductSuccess(product))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}
export const productFavouriteAction = (item: any, onSuccess: any) => {
    return (dispatch: any) => {
        dispatch(fetchProductRequest)
        productPostAPI(item)
            .then(response => {
                const product = response?.data?.data;
                if (response.status === 200) {
                    dispatch(fetchProductSuccess(product))
                    onSuccess()
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}
export const productFavouriteGetAction = () => {
    return (dispatch: any) => {
        dispatch(fetchProductRequest)
        productFavouriteGetAPI()
            .then(response => {
                const product = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchProductSuccess(product))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}
export const favDelete = (productID: any) => {
    return (dispatch: any) => {
        dispatch(fetchProductRequest)
        productDeleteAPI(productID)
            .then(response => {
                if (response.status === 200) {
                    dispatch(productFavouriteGetAction())
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductFailure(errorMsg))
            })
    }
}

export const fetchShopRequest = () => {
    return {
        type: FETCH_SHOP_REQUEST
    }
}
export const fetchShopSuccess = (shop: any) => {
    return {
        type: FETCH_SHOP_SUCCESS,
        payload: shop
    }
}
export const fetchShopFailure = (error: any) => {
    return {
        type: FETCH_SHOP_FAILURE,
        payload: error
    }
}
export const shopAction = () => {
    return (dispatch: any) => {
        dispatch(fetchShopRequest)
        shopProductAPI()
            .then(response => {
                const products = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchShopSuccess(products))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchShopFailure(errorMsg))
            })
    }
}
export const shopQuery = (query: any) => {
    return (dispatch: any) => {
        dispatch(fetchShopRequest)
        shopQueryAPI(query)
            .then(response => {
                const products = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchShopSuccess(products))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchShopFailure(errorMsg))
            })
    }
}
export const categoryAction = (cat: any) => {
    return (dispatch: any) => {
        dispatch(fetchShopRequest)
        productFilterGetAPI(cat)
            .then(response => {
                const products = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchShopSuccess(products))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchShopFailure(errorMsg))
            })
    }
}
export const priceFilterAction = (price: any, cat: any) => {
    return (dispatch: any) => {
        if (cat && cat.length > 0) {
            productFilterGetAPI(cat)
                .then(response => {
                    const products = response.data.data;
                    const filterdata = products.sort((prev: any, acc: any) => {
                        if (price === 'Low to High')
                            return prev.attributes.price - acc.attributes.price
                        else
                            return acc.attributes.price - prev.attributes.price

                    })
                    if (response.status === 200) {
                        dispatch(fetchShopSuccess(filterdata))
                    }
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchShopFailure(errorMsg))
                })
        }
        else {
            shopProductAPI()
                .then(response => {
                    const products = response.data.data;
                    const filterdata = products.sort((prev: any, acc: any) => {
                        if (price === 'Low to High')
                            return prev.attributes.price - acc.attributes.price
                        else
                            return acc.attributes.price - prev.attributes.price

                    })
                    if (response.status === 200) {
                        dispatch(fetchShopSuccess(filterdata))
                    }
                })
                .catch(error => {
                    const errorMsg = error.message;
                    dispatch(fetchShopFailure(errorMsg))
                })
        }
    }
}

