import axios from "axios";
import { baseUrl } from "../utils/url";

class Services {
  static fetchLogin = async (formdata) => { 
    const response = await axios.post(
      baseUrl + "accounts/login",
      formdata
    );
    return response;
  };
}

export default Services;

