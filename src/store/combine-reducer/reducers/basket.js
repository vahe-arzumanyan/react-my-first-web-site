import {createSlice} from "@reduxjs/toolkit";

const initialState = {
basketList: []
}

const Basket = () => createSlice({
name: "BasketList",
    initialState,
    reducers:{
    addProductBasket(state, action){
        state.basketList=[...state.basketList, action.payload]
    },
        deleteBasketProduct(state, action){
        state.basketList.forEach((item, index)=>{
            if(item._id === action.payload){
                state.basketList.splice(index, 1)
            }
        })
        },
    }
})

export const {addProductBasket, deleteBasketProduct} = BasketList.actions;

