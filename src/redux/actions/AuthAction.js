import axios from "axios";
import Services from "../../services/services";
import * as actionType from "./actionTypes";

export const authAction = (data, navigate) => async (dispatch) => {
  try {
    const response = await Services.fetchLogin(data);
    dispatch({
      type: actionType.Login_Succes,
      payload: response.data,
    });
    navigate("/home");
  } catch (error) {
    console.log(error);
  }
};
