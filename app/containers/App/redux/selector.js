/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const globalState = state => state.global || initialState;

const getEmail = () =>
  createSelector(
    globalState,
    loginState => loginState.email,
  );
const getIsLoggedIN = () =>
  createSelector(
    globalState,
    loginState => loginState.loggedIn,
  );

export { globalState, getEmail, getIsLoggedIN };
