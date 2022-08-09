import axios from "axios";
const endPoint = "http://localhost:8000/api/v1/user";

export const insertUserToServer = async (user) => {
  try {
    const response = await axios.post(endPoint, user);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const getOneUser = async (filter) => {
  try {
    const response = await axios.post(endPoint + "/login", filter);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};
