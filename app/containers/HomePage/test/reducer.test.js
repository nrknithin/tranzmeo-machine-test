import produce from 'immer';

import homeReducer from '../redux/reducer';
import { setScheduleData } from '../redux/actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      total: 0,
      limit: 0,
      skip: 0,
      data: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the setScheduleData action correctly', () => {
    const data = { data: [], limit: 10, skip: 0, total: 0 };

    const expectedResult = produce(state, draft => {
      draft.total = data.total;
      draft.limit = data.limit;
      draft.skip = data.skip;
      draft.data = data.data;
    });

    expect(homeReducer(state, setScheduleData(data))).toEqual(expectedResult);
  });
});
