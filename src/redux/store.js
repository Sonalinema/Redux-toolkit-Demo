import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counterSlice";
import searchReducer from '../features/searchSlice';
import collectionReducer from '../features/collectionSlice'
export const store = configureStore({
  reducer: {   
    // your all reducers will come here imported from their respective slices
    // counter: counterSlice.reducer   //this counter name will be used during selector
    search: searchReducer,
    collection : collectionReducer
  }
});