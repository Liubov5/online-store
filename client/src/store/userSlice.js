import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const registration = createAsyncThunk('users/registration', async ({email, password}, thunkAPI)=>{
    
    try {   
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/registration`, {email, password, role: "ADMIN"} );
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);

    }catch(err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
});

export const login = createAsyncThunk('users/login', async({email,password}, thunkAPI)=>{
    try{
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {email, password});
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    }catch(err){
        console.log(err);
        return thunkAPI.rejectWithValue(err);
    }
})

export const check = createAsyncThunk('users/check', async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/auth`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
    
});


export const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isAuth:false,
    },
    reducers:{
        setLogout:(state)=>{
            state.currentUser = null;
            state.isAuth = false;
        },
        setIsAuth:(state, {payload})=>{
            state.isAuth = payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(registration.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
        })
        builder.addCase(login.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
        })
        builder.addCase(check.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
        })
    }
})

export const {setIsAuth, setLogout} = userSlice.actions;

export default userSlice.reducer;