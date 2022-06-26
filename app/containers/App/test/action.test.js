import { SET_LOGGED_IN, SET_LOGGED_OUT } from '../redux/constant';

import { setLoggedIn, setLoggedOut } from '../redux/actions';

describe('App Actions', () => {
  describe('setLoggedIn', () => {
    it('should return the correct type and the passed name', () => {
      const email = 'test';
      const token = 'testToken';
      const expectedResult = {
        type: SET_LOGGED_IN,
        email,
        token,
      };

      expect(setLoggedIn(email, token)).toEqual(expectedResult);
    });
  });
  describe('setLoggedOut', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: SET_LOGGED_OUT,
      };

      expect(setLoggedOut()).toEqual(expectedResult);
    });
  });
});
