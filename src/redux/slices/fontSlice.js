import { createSlice, createSelector } from "@reduxjs/toolkit";

const fontSlice = createSlice({
  name: "Font",
  initialState: {
    size: "base",
  },
  reducers: {
    changeSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { changeSize } = fontSlice.actions;
export default fontSlice.reducer;
