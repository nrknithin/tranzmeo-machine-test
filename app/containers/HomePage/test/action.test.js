import { GET_SCHEDULE, SET_SCHEDULE } from '../redux/constant';

import { getScheduleData, setScheduleData } from '../redux/actions';

describe('Home Actions', () => {
  describe('getScheduleData', () => {
    it('should return the correct type and the passed name', () => {
      const expectedResult = {
        type: GET_SCHEDULE,
      };

      expect(getScheduleData()).toEqual(expectedResult);
    });
  });
  describe('setScheduleData', () => {
    it('should return the correct type and the passed name', () => {
      const data = { data: [], limit: 10, skip: 0, total: 0 };
      const expectedResult = {
        type: SET_SCHEDULE,
        data,
      };

      expect(setScheduleData(data)).toEqual(expectedResult);
    });
  });
});
