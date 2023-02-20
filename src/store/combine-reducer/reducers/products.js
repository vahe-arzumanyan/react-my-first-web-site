import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productList:[]
}

const Products = createSlice({
    name:'Products',
    initialState,
    reducers:{
        addProducts(state,action){
            state.productList = action.payload
        },
        deleteProducts(state,action){
            state.productList.map((item, index )=>{
                if(action.payload === index){
                    state.productList.splice((index, 1))
                }
            })
        },

        pushProduct(state, action){
            state.categoriesList.map((element, i)=>{
                if(element.productsName === action.payload.categoriesName){
                    element.productList.push(action.payload.product)
                }
            })
        },
    }
})

export const {addProducts, deleteProducts, pushProduct} = Products.actions
export default Products.reducer;