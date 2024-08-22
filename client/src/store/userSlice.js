import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const registration = createAsyncThunk('users/registration', async ({email, password}, thunkAPI)=>{
    
    try {   
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/registration`, {email, password, role: "ADMIN"} );
        return jwtDecode(data.token);

    }catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

export const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isAuth:true,
    },
    reducers:{
        getUser:()=>{
            
        },
        setIsAuth:(state, {payload})=>{
            state.isAuth = payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(registration.fulfilled, (state, {payload})=>{
            console.log(payload)
        })
    }
})

export const {setIsAuth} = userSlice.actions;

export default userSlice.reducer;