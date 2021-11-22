import { configureStore } from '@reduxjs/toolkit'
import converterReducer from './features/converterSlice'

export default configureStore({
  reducer: {
    converter: converterReducer
  }
})