import { post, get } from './NetworkUtils';

export const login = payload => {
  const isAuthenticated = false;
  const URL = `/authentication`;
  return post(URL, payload, isAuthenticated);
};
// get api - use the mode to create new api functions
export const getSchedule = () => {
  const isAuthenticated = true;
  const URL = `schedules?doctorsId=364&organisationsId=140&date%5B%24gte%5D=2022-05-10&date%5B%24lte%5D=2022-05-30&%24skip=0&%24limit=500&%24sort%5Bdate%5D=1&%24sort%5Btime%5D=1`;
  return get(URL, isAuthenticated);
};
