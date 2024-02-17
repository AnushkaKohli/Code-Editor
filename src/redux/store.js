import { configureStore } from "@reduxjs/toolkit";
import fontReducer from "./slices/fontSlice";

export const store = configureStore({
  reducer: {
    font: fontReducer,
  },
  devTools: true,
});
