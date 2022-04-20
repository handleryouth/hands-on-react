import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";

export const rootReducer = combineReducers({
  search: searchSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = createStore();
