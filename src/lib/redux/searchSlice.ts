import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
