import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    basketList: []
}

const Basket = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductBasket(state, action) {
            state.basketList = [...state.basketList, action.payload]
        },
        deleteProductBasket(state, action) {
            state.basketList.forEach((item, index) => {
                if (item._id === action.payload) {
                    state.basketList.splice(index, 1)
                }
            })
        },
    }
})

export const {addProductBasket, deleteProductBasket} = Basket.actions;
export default Basket.reducer

