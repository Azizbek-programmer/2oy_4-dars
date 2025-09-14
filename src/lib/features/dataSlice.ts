import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IItem {
    id: number
    name: string
    price: string
    brand: string
    color: string 
}

interface IData{
    value: IItem[],
    editingItem: null | IItem
}

const jsonData = localStorage.getItem("data")

const initialState: IData = {
    value: jsonData ? JSON.parse(jsonData) : [],
    editingItem: null
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IItem>) => {
            state.value.push(action.payload)
            localStorage.setItem("data", JSON.stringify(state.value))
        },
        remove: (state, action: PayloadAction<number>)=>{
            state.value = state.value.filter((item)=> item.id !== action.payload)
            localStorage.setItem("data", JSON.stringify(state.value))
        },
        setEditingItem: (state, action: PayloadAction<IItem>) => {
            state.editingItem = action.payload
        },  
        uptade: (state, action: PayloadAction<IItem>) =>{
            state.value = state.value.map((item)=> item.id === action.payload.id ? action.payload : item)
            state.editingItem = null
            localStorage.setItem("data", JSON.stringify(state.value))
        }
    }
})

export const {add, remove, setEditingItem, uptade } = dataSlice.actions

export default dataSlice.reducer
