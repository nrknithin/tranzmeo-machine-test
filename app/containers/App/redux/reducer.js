import produce from 'immer';
import { getCookie, setCookie } from '../../../utils/setCookies';
import { SET_LOGGED_IN, SET_LOGGED_OUT } from './constant';

export const initialState = {
  loggedIn: getCookie('access_token') !== '',
  email: '',
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_LOGGED_IN:
        setCookie('access_token', action.token, 1);
        draft.email = action.email;
        draft.loggedIn = true;
        break;
      case SET_LOGGED_OUT:
        setCookie('access_token', '', 0);
        draft.email = '';
        draft.loggedIn = false;
        break;
      default:
        draft = state;
    }
  });

export default appReducer;
