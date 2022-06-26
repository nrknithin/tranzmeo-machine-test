import { GET_SCHEDULE, SET_SCHEDULE } from './constant';

export const getScheduleData = () => ({
  type: GET_SCHEDULE,
});
export const setScheduleData = data => ({
  type: SET_SCHEDULE,
  data,
});
