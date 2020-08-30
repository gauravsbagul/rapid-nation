import axios from 'axios';
import { GET_CATEGORY } from '../types';

const API = 'https://portal.rapidnation.in/category/';

//To getUserProfileFunc
export const getCategory = () => {
  console.log('getCategory -> getCategory');
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;
      const body = {
        method: 'GET',
        url: API + 'api/getCategory',
      };
      const response = await axios(body);
      console.log('getCategory -> response', response);

      dispatch({
        type: GET_CATEGORY,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To  clearGetCategoryProps
export const clearGetCategoryProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_CATEGORY,
          payload: undefined,
        }),
      );
    });
};
