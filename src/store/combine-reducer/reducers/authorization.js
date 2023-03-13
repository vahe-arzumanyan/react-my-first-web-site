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
        checkToken(state, action) {
            state.userToken = action.payload
        }
    }
}))

export const {createUsers, checkUsers, checkToken} = Authorization.actions
export default Authorization.reducer;