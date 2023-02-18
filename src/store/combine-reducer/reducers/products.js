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
        }
    }
})

export const {addProducts, deleteProducts} = Products.actions
export default Products.reducer;