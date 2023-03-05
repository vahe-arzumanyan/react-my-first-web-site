import {combineReducers} from "redux";
import Categories from "./reducers/categories"
import Products from "./reducers/products"
import Basket from "./reducers/basket"

const rootReducers = combineReducers({
    Categories,
    Products,
    Basket
})

export default rootReducers;