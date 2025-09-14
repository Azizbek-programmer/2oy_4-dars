import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IGreeting{
    value: string
}

const initialState: IGreeting = {
    value: "Hello world"
}

export const counterSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: {
        change:(state, action: PayloadAction<string>) =>{
            state.value = action.payload
        }
    }
})

export const {change} = counterSlice.actions

export default counterSlice.reducer

























