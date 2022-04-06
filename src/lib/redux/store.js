import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
