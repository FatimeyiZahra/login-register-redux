import axios from "axios";
import * as actionType from "./actionTypes";

export const authAction = (data, navigate) => (dispatch) => {
  axios
    .post("https://localhost:44305/api/manage/accounts/login", data)
    .then((res) => {
      dispatch({ type: actionType.Login_Succes, payload: res.data });
      navigate("/home");
    });
};
