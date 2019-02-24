import httpService from "./httpService";
import { loginWithJwt } from "./authService";

export async function registerUser(user) {
  const response = await httpService.post("/users", mapUserToDTO(user));
  loginWithJwt(response.headers["x-auth-token"]);
}

function mapUserToDTO({ username, password, name }) {
  return {
    email: username,
    password,
    name
  };
}
