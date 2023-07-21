import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'


// creating global state for centerailize data  
export const store = configureStore({
  reducer: {
    counter:CounterSlice,
  },
})