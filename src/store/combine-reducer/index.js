import {combineReducers} from "redux";
import Categories from "./reducers/categories"
import Products from "./reducers/products"
import Basket from "./reducers/basket"
import Authorization from "./reducers/authorization"

const rootReducers = combineReducers({
    Categories,
    Products,
    Basket,
    Authorization
})

export default rootReducers;