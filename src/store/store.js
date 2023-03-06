import { configureStore } from '@reduxjs/toolkit'
import controlReducer from './controlSlice'


export const store = configureStore({
  reducer: {
    control: controlReducer
  },
})