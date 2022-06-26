import produce from 'immer';
import { SET_SCHEDULE } from './constant';
export const initialState = {
  total: 0,
  limit: 0,
  skip: 0,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SCHEDULE:
        draft.total = action.data.total;
        draft.limit = action.data.limit;
        draft.skip = action.data.skip;
        draft.data = action.data.data;
        break;
      default:
        draft = state;
    }
  });

export default homeReducer;
