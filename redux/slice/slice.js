import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  number: 1,
  isPopup: false,
};
const userSlice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    handleSomething: (state, { payload }) => {
      state.number += payload;
    },
    handlePopUp: (state, { payload }) => {
      console.log("payload: ", payload);
      state.isPopup = payload;
    },
  },
});
export const { handleSomething, handlePopUp } = userSlice.actions;
export default userSlice.reducer;
