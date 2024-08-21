import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import deviceSlice  from "./deviceSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        device: deviceSlice,
    }
})