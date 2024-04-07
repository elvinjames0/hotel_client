import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/slice";
export const store = configureStore({
  reducer: {
    userSlice,
  },
});
