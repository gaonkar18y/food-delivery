import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers:{
        login:(state, action)=>{
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.user=null
        }
    }
});

export default authReducer.reducer;

export const { login, logout } = authReducer.actions;