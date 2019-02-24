import Axios from "axios";
import { toast } from "react-toastify";
import Logger from "./LogService";

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;
//Axios.defaults.headers.common["x-auth-token"] = auth.getJwt();//this is a bi directional dependancy because auth module needs http module and vice versa
function setJwt(jwt) {
  Axios.defaults.headers.common["x-auth-token"] = jwt;
  console.log("setJwt clled");
}
Axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Logger.log(error);
    toast.error("unexpected error");
  } else {
    toast.error(error.response.data);
  }
  return Promise.reject(error);
  //return "error";
});

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt: setJwt
};
