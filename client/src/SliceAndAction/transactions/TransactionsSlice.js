import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};
const TransactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, { payload }) => {
      state.transactions = payload;
    },
  },
});

const { reducer, actions } = TransactionsSlice;
export const { setTransactions } = actions;
export default reducer;
