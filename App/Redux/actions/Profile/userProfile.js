import axios from 'axios';
import { GET_USER_PROFILE, CHANGE_PROFILE_PIC } from '../types';

const API = 'https://portal.rapidnation.in/customer/';

//To getUserProfileFunc
export const getUserProfileFunc = () => {
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;
      const body = {
        method: 'POST',
        url: API + 'api/getProfile',
        data: {
          customerid: loginResponse?.response?.response?.customerid,
        },
      };
      const response = await axios(body);

      dispatch({
        type: GET_USER_PROFILE,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
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

//To uploadProfilePic
export const uploadProfilePic = (imageData) => {
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;

      let data = new FormData();
      data.append(`customerid`, loginResponse?.response?.response?.customerid);
      data.append(`avatar`, imageData);

      headers = {
        'Content-Type': 'multipart/form-data',
      };
      const response = await axios.post(API + 'api/updateProfileImage', data, {
        headers,
      });

      dispatch({
        type: 'CHANGE_PROFILE_PIC',
        payload: { response: response.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: 'CHANGE_PROFILE_PIC',
        payload: { response: error, error: true },
      });
    }
  };
};

//To  clearUploadProfilePicProps
export const clearUploadProfilePicProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: CHANGE_PROFILE_PIC,
          payload: undefined,
        }),
      );
    });
};
