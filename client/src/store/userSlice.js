import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isAuth:false,
    },
    reducers:{
        getUser:()=>{
            
        },
        setIsAuth:(state, {payload})=>{
            state.isAuth = payload;
        }
    }
})

export const {setIsAuth} = userSlice.actions;

export default userSlice.reducer;