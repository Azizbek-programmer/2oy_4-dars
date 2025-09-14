import { configureStore } from '@reduxjs/toolkit'
import counter from "./features/counterSlice"
import greeting from "./features/greetingSlice"
import data from "./features/dataSlice"

export const store = configureStore({
  reducer: {
    counter,
    greeting,
    data,
    // likes,
    // cart,
    // auth,
    // token,
    // user,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch