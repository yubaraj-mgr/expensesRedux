import { getOneUser } from "../../helper/AxiosHelper";
import { toast } from "react-toastify";
import { setUser } from "./UserSlice";

export const verifyLogin = (filter) => async (dispatch) => {
  const { status, message, result } = await getOneUser(filter);
  toast[status](message);
  if (status === "success") {
    window.localStorage.setItem("user", JSON.stringify(result));
    dispatch(setUser(result));
  }
};
