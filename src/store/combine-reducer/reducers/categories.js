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
},
        editCategories(state, action){
     const categoriesEditList = state.categoriesList.map((item, index)=>{
         if( index === action.payload.elementIndex){
             item = action.payload
             // item = action.payload.elementEditContent
         }
         return item;
            })
        }
    }
})

export const {addCategoriesList, editCategories} = Categories.actions
export default Categories.reducer;