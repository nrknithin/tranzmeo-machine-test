import { SET_LOGGED_IN, SET_LOGGED_OUT } from './constant';
export const setLoggedIn = (email, token) => ({
  type: SET_LOGGED_IN,
  email,
  token,
});
export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});
