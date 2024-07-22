import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer.ts'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
