import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoriesList:[]
}

const Categories = createSlice({
    name:'categories',
    initialState,
    reducers:{
  addCategoriesList(state, action){
     state.categoriesList = action.payload;
}
    }
})

export const {addCategoriesList} = Categories.actions
export default Categories.reducer;