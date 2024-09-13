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

export const fetchDevices = createAsyncThunk("device/fetchDevices", async({typeId,brandId,page,limit}, thunkAPI) => {
    const params = {
        typeId:typeId,
        brandId:brandId,
        page:page,
        limit:limit
    }
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/device`, {params:params});
    return data;
})

export const fetchOneDevice = createAsyncThunk("device/fetchOneDevice", async(id)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/device/${id}`);
    return data;
}) 
//такой способ подтягивает за собой доп инфу

export const deleteDevice = createAsyncThunk("device/deleteDevice", async(id)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/device/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return data;
});

export const deviceSlice = createSlice({
    name:"device",
    initialState:{
        types:[],
        brands:[],
        devices:[],
        selectedDevice:{},
        selectedType:{},
        selectedBrand:{},
        page:1,
        totalCount:0,
        limit:5,
    },
    reducers:{
        setSelectedType:(state, {payload})=>{
            state.selectedType = payload;
            state.page = 1;
        },
        setSelectedBrand:(state, {payload})=>{
            state.selectedBrand = payload;
        },
        setPage:(state, {payload})=>{
            state.page = payload
        },
        setTotalCount:(state, {payload})=>{
            state.totalCount = payload
        },
        setLimit:(state, {payload})=>{
            state.limit = payload
        },
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
        builder.addCase(createDevice.fulfilled, (state, {payload})=>{
            state.devices.push(payload);
            state.selectedBrand = {};
            state.selectedType = {};
        })  
        builder.addCase(deleteDevice.fulfilled, (state, {payload})=>{
            console.log(payload);
        })
        builder.addCase(fetchOneDevice.fulfilled, (state, {payload})=>{
           state.selectedDevice = payload;
        }) //получается бессмысленно немного, типо делаешь
    }
})

export const {setSelectedType, setSelectedBrand, setPage, setTotalCount, setLimit} = deviceSlice.actions;

export default deviceSlice.reducer;

export const selectDeviceById = (state, deviceId) => state.device.devices.find((device)=>device.id === Number(deviceId)); 

//это без допинфы, надо как -то подтянуть доп инфу теперь понятно почему нужен fetchOneDevice в state они хранятся без доп инфы

