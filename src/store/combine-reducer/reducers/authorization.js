import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    authorizationList: [],
    userToken: ''
}

const Authorization = (createSlice({
    name: 'Identification',
    initialState,
    reducers: {
        createUsers(state, action) {
            state.indeficationList = [...state.authorizationList, action.payload]
        },
        checkUsers(state, action) {
            const localUser = JSON.parse(localStorage.getItem('authorizationUser'))
            if (localUser) {
                state.identificationList = localUser
            }
        },
        checkToke(state, action) {
            state.userToke = action.payload
        }
    }
}))

export const {createUsers, checkUsers, checkToke} = Authorization.actions
export default Authorization.reducer;