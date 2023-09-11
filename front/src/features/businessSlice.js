import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  category: "",
};

const businessInfoSlice = createSlice({
  name: "businessInfo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setName, setCategory } = businessInfoSlice.actions;

export default businessInfoSlice.reducer;
