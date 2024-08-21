import { createSlice } from "@reduxjs/toolkit";

export const deviceSlice = createSlice({
    name:"device",
    initialState:{
        types:[{
            id:1,
            title:"Холодильники"
        }, 
        {
            id:2,
            title:"Электроника"
        },
        {
            id:3,
            title:"Кухонное оборудование"
        },
        {
            id:4,
            title:"Смартфоны"
        },
        {
            id:5,
            title:"Ноутбуки"
        }
        ],
        brands:[
            {
                id:1,
                name:"Iphone"
            },
            {
                id:2,
                name:"Samsung"
            },
            {
                id:3,
                name:"Lenovo"
            },
            {
                id:4,
                name:"Asus"
            },
        ],
        devices:[
            {
                id:1,
                name:"Iphone 15",
                price: "1000$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:2,
                name:"Iphone 14",
                price: "900$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:3,
                name:"Iphone 13",
                price: "800$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:4,
                name:"Iphone 12",
                price: "700$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:5,
                name:"Iphone 11",
                price: "600$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:6,
                name:"Iphone 11",
                price: "600$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:7,
                name:"Iphone 11",
                price: "600$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:8,
                name:"Iphone 11",
                price: "600$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
            {
                id:9,
                name:"Iphone 11",
                price: "600$",
                img:"https://economictimes.indiatimes.com/thumb/msid-95136602,width-1200,height-900,resizemode-4,imgsize-18404/iphone-15-pro.jpg?from=mdr",
                rating:5
            },
        ],
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
    }
})

export const {setSelectedType, setSelectedBrand} = deviceSlice.actions;

export default deviceSlice.reducer;