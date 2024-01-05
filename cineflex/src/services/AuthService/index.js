import { LOGIN_CREDENTIALS } from "../../constants/service.constants";

export const loginUser = (username, password) => {
  if (username === LOGIN_CREDENTIALS.email && password === LOGIN_CREDENTIALS.password) {
    localStorage.setItem(LOGIN_CREDENTIALS.isLogged, LOGIN_CREDENTIALS.true);
    return { username: LOGIN_CREDENTIALS.username };
  }
  return null;
};

export const logoutUser = () => {
  localStorage.removeItem(LOGIN_CREDENTIALS.isLogged);
};

export const userIsLoggedIn = () => {
  return localStorage.getItem(LOGIN_CREDENTIALS.isLogged) === LOGIN_CREDENTIALS.true;
};
