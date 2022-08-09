import axios from "axios";
const userEndPoint = "http://localhost:8000/api/v1/user";
const transactionsEndPoint = "http://localhost:8000/api/v1/transactions";

export const insertUserToServer = async (user) => {
  try {
    const response = await axios.post(userEndPoint, user);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const getOneUser = async (filter) => {
  try {
    const response = await axios.post(userEndPoint + "/login", filter);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

// Transactions
// Transactions
// Transactions
// Transactions

export const insertTransactionToServer = async (data) => {
  try {
    const response = await axios.post(transactionsEndPoint, data);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const fetchAllData = async (filter) => {
  try {
    const response = await axios.get(transactionsEndPoint, filter);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};
