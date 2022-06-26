import produce from 'immer';

import appReducer from '../redux/reducer';
import { setLoggedIn, setLoggedOut } from '../redux/actions';
import { getCookie } from '../../../utils/setCookies';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loggedIn: getCookie('access_token') !== '',
      email: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the setLoggedIn action correctly', () => {
    const email = 'test';
    const token = 'testToken';
    const expectedResult = produce(state, draft => {
      draft.email = email;
      draft.loggedIn = true;
    });

    expect(appReducer(state, setLoggedIn(email, token))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setLoggedOut action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.email = '';
      draft.loggedIn = false;
    });

    expect(appReducer(state, setLoggedOut())).toEqual(expectedResult);
  });
});
