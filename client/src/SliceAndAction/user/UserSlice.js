import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

const { reducer, actions } = user;
export const { setUser } = actions;
export default reducer;
