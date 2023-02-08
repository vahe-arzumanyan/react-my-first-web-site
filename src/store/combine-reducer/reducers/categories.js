import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoriesList: []
}

const Categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategoriesList(state, action) {
            state.categoriesList = action.payload;
        },
        editCategories(state, action) {
            const categoriesEdit = state.categoriesList.map((item, index) => {
                if (index === action.payload.elementIndex) {
                    item = action.payload.categoriesEdit
                }
                return item;
            })
            state.categoriesList = categoriesEdit
        },
        // =========================================================

        deleteCategories(state, action) {
            state.categoriesList.forEach((itemDelete, index) => {
                if (action.payload === index) {
                    state.categoriesList.splice(index, 1);
                }
            })
        }

        // =========================================================


    }

})

export const {addCategoriesList, editCategories, deleteCategories} = Categories.actions
export default Categories.reducer;