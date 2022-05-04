import {FETCH_REGISTER_REQUEST,FETCH_REGISTER_SUCCESS,FETCH_REGISTER_FAILURE} from '../types/RegisterTypes';


const initialState = {
    loading : false,
    data : [],
    error : ''
}

export const RegisterReducer = (state=initialState,action:any) => {
        switch(action.type) {
            case FETCH_REGISTER_REQUEST :
                return {
                    ...state,
                    loading : true

                }

                case FETCH_REGISTER_SUCCESS :
                    return {
                        loading : false,
                        data : action.payload,
                        error : ''
                    }

                    case FETCH_REGISTER_FAILURE : 
                    return {
                        loading : false,
                        data : [],
                        error : action.payload
                    }
                    default : return state;
        }
}