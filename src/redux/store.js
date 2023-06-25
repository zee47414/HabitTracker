import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habitslice'

const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;