import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    set() {},
  },
});

export const { set } = historySlice.actions;

export default historySlice.reducer;
