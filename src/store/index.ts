import { configureStore } from '@reduxjs/toolkit'
import aside from './aside';


export default configureStore({
  reducer: {
    aside,
  }
})