import { categoryGetAPI } from '../service/categoryservice/index';
import { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from '../types/CatTypes';
export const fetchCategoryRequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}
export const fetchCategorySuccess = (category: any) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: category
    }
}
export const fetchCategoryFailure = (error: any) => {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: error
    }
}
export const catAction = () => {
    return (dispatch: any) => {
        dispatch(fetchCategoryRequest)
        categoryGetAPI()
            .then(response => {
                const categories = response.data.data;
                if (response.status === 200) {
                    dispatch(fetchCategorySuccess(categories))
                }
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCategoryFailure(errorMsg))
            })
    }
}
