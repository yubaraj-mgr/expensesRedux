import {
  fetchAllData,
  insertTransactionToServer,
} from "../../helper/AxiosHelper";
import { toast } from "react-toastify";
import { setTransactions } from "./TransactionsSlice";

export const postTransactions = (data) => async (dispatch) => {
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  const { status, message } = await insertTransactionToServer({
    ...data,
    userId: _id,
  });
  toast[status](message);
};

export const getAllTransactions = () => async (dispatch) => {
  const { _id } = JSON.parse(window.localStorage.getItem("user"));
  const { status, message, allTransactions } = await fetchAllData({
    headers: {
      authorization: _id,
    },
  });
  console.log(allTransactions);
  toast[status](message);
  status === "sucess" && dispatch(setTransactions(allTransactions));
};
