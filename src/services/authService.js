import jwtDecode from "jwt-decode";
import httpService from "./httpService";
//import config from "../config";

const apiEndoint = "/auth";
const tokenKey = "token";

httpService.setJwt(getJwt());

export async function login(user) {
  const { data: jwt } = await httpService.post(apiEndoint, mapToDTO(user));
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    console.log(jwtDecode(localStorage.getItem(tokenKey)));
    return jwtDecode(localStorage.getItem(tokenKey));
  } catch (error) {
    return null;
  }
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default { login, loginWithJwt, logout, getCurrentUser, getJwt };

function mapToDTO(user) {
  return {
    email: user.username,
    password: user.password
  };
}
