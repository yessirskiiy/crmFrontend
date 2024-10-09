import {createSlice} from '@reduxjs/toolkit'
import {loginReducers, registerReducers} from "./userReducers.ts";


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // createUser(state, action){
        //     state.user.name = action.payload
        //     state.user.email = action.payload
        // },
        logOut(state) {
            state.user = null
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        loginReducers(builder)
        registerReducers(builder)
    }
})


export const {
    logOut
} = userSlice.actions

export default userSlice.reducer