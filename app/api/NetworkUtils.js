// imports
import axios from 'axios';
import { getCookie } from '../utils/setCookies';
import { BASE_URL, API_HEADER_KEY } from './config';
/*= =========================================================== */

// creating axios instance
const createAxiosInstance = URL =>
  axios.create({
    baseURL: URL,
    timeout: 30000,
  });
/*= =========================================================== */

// creating config
const setUpConfig = isAuthenticated => {
  try {
    const accessToken = getCookie('access_token');
    const CONFIG_WITH_AUTHORIZATION = {
      headers: {
        'api-header-security': API_HEADER_KEY,
        'Content-Type': 'application/json',
        'x-access-token': accessToken,
      },
    };
    const CONFIG_WITHOUT_AUTHORIZATION = {
      headers: {
        'api-header-security': API_HEADER_KEY,
        'Content-Type': 'application/json',
      },
    };

    return isAuthenticated
      ? CONFIG_WITH_AUTHORIZATION
      : CONFIG_WITHOUT_AUTHORIZATION;
  } catch (e) {
    throw new Error('Error Setting Config');
  }
};

/*= =========================================================== */

// get method
const get = async (API_URL, isAuthenticated) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    const CONFIG = setUpConfig(isAuthenticated);
    const apiResponse = await createAxiosInstance(BASE_URL).get(API_URL, {
      ...CONFIG,
      cancelToken: apiCancelToken.token,
    });
    return apiResponse.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
/*= =========================================================== */

// post method
const post = async (API_URL, PAYLOAD = {}, isAuthenticated) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    const CONFIG = setUpConfig(isAuthenticated);
    const apiResponse = await createAxiosInstance(BASE_URL).post(
      API_URL,
      PAYLOAD,
      {
        ...CONFIG,
        cancelToken: apiCancelToken.token,
      },
    );
    return apiResponse.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
/*= =========================================================== */

export { post, get };
