import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./SliceAndAction/user/UserSlice";
import TransactionSlice from "./SliceAndAction/transactions/TransactionsSlice";
export const store = configureStore({
  reducer: {
    UserSlice,
    TransactionSlice,
  },
});
