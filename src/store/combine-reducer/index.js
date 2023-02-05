import {combineReducers} from "redux";
import Categories from "./reducers/categories"
import Products from "./reducers/products"

const rootReducers = combineReducers({
    Categories,
    Products
})

export default rootReducers;