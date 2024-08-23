import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createType = createAsyncThunk("device/createType", async(type)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/type`, type, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return data;
});

export const fetchTypes = createAsyncThunk("device/fetchTypes", async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/type`);
    return data;
})

export const createBrand = createAsyncThunk("device/createBrand", async(brand)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/brand`, brand, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return data;
});

export const fetchBrands = createAsyncThunk("device/fetchBrands", async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/brand`);
    return data;
})

export const createDevice = createAsyncThunk("device/createDevice", async(device)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/device`, device, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return data;
});

export const fetchDevices = createAsyncThunk("device/fetchDevices", async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/device`);
    return data;
})

export const fetchOneDevice = createAsyncThunk("device/fetchOneDevice", async(id)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/device/${id}`);
    return data;
})

export const deviceSlice = createSlice({
    name:"device",
    initialState:{
        types:[],
        brands:[],
        devices:[],
        selectedDevice:null,
        selectedType:null,
        selectedBrand:null,
    },
    reducers:{
        setSelectedType:(state, {payload})=>{
            state.selectedType = payload;
        },
        setSelectedBrand:(state, {payload})=>{
            state.selectedBrand = payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTypes.fulfilled, (state, {payload})=>{
            state.types = payload;
        })
        builder.addCase(fetchBrands.fulfilled, (state, {payload})=>{
            state.brands = payload;
        })
        builder.addCase(fetchDevices.fulfilled, (state, {payload})=>{
            state.devices = payload.rows;
        })
        builder.addCase(createType.fulfilled, (state, {payload})=>{
            state.types.push(payload)
        })
        builder.addCase(createBrand.fulfilled, (state, {payload})=>{
            state.brands.push(payload);
        })
        // builder.addCase(fetchOneDevice.fulfilled, (state, {payload})=>{
        //    state.selectedDevice = payload;
        // }) //не работает т.е. работает но бессмысленная получается
    }
})

export const {setSelectedType, setSelectedBrand} = deviceSlice.actions;

export default deviceSlice.reducer;