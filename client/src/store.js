import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./SliceAndAction/user/UserSlice";
export const store = configureStore({
  reducer: {
    UserSlice,
  },
});
