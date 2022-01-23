import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mainReducer from '../features/main/mainSlice'

export const store = configureStore({
	reducer: {
      counter: counterReducer,
      main: mainReducer,
	},
})
