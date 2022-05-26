import axios from "axios";
import * as actionType from "../actions/actionTypes";

const authState = {
  isLogedIn: false,
  token: [],
};
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authobj = JSON.parse(auth);
    const jwttoken = authobj.token;
    if (auth) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
      return authobj;
    }
  } catch (error) {
    return authState;
  }
};


const newAuth = getAuthState();

const AuthReducer = (state = newAuth, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.Login_Succes:
      const NewAuthState = {
        isLogedIn: true,
        token: payload,
      };
      axios.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
      localStorage.setItem("auth", JSON.stringify(NewAuthState));
      return NewAuthState;
    case actionType.Login_Fail:
      localStorage.removeItem("auth");
      return authState;
    default:
      return state;
  }
};
export default AuthReducer;
