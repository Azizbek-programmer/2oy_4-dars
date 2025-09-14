import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICounter{
    value: number
}

const initialState: ICounter = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        inc: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
})

export const {inc} = counterSlice.actions

export default counterSlice.reducer

























