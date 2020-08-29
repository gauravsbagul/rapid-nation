import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { GET_USER_PROFILE } from '../types';

const API = 'https://portal.rapidnation.in/customer/';

//To getUserProfileFunc
export const getUserProfileFunc = (data) => {
  console.log('getUserProfileFunc -> data', data);
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/getProfile',
        data,
      };
      const response = await axios(body);
      console.log('getUserProfileFunc -> response', response);

      dispatch({
        type: GET_USER_PROFILE,
        payload: { response: response?.data, error: response?.data.status },
      });
    } catch (error) {
      console.log('getUserProfileFunc -> error', error);
      dispatch({
        type: GET_USER_PROFILE,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To  clearGetUserProfileProps
export const clearGetUserProfileProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_USER_PROFILE,
          payload: undefined,
        }),
      );
    });
};
