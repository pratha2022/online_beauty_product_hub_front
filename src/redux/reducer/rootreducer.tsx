import { combineReducers } from "redux";
import { CartIdReducer } from "./CartIdReducer";
import { CartReducer } from "./CartReducer";
import { CatReducer } from "./CatReducer";
import { ProductReducer, ShopReducer } from "./ProductReducer";
import { RegisterReducer } from "./RegisterReducer";
const rootReducer = combineReducers({
   product: ProductReducer,
   shop: ShopReducer,
   data: RegisterReducer,
   category: CatReducer,
   cart: CartReducer,
   cartID: CartIdReducer
})
export default rootReducer;