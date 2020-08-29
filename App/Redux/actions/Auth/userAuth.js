import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  FETCH_USER,
  GET_OTP,
  IS_AUTHENTICATED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from '../types';

const API = 'https://portal.rapidnation.in/customer/';

//To signUp
export const signUp = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/register',
        data,
      };
      const response = await axios(body);

      //Dispatch User Token
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      //Catch Login Error
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To export const clearRegisterDetailsProps = () => {
export const clearRegisterDetailsProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: REGISTER_SUCCESS,
          payload: undefined,
        }),
      );
    });
};

export const getOTP = (phone) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/getOTP',
        data: {
          phone,
        },
      };
      const response = await axios(body);

      //Dispatch User Token
      dispatch({
        type: GET_OTP,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      //Catch Login Error
      dispatch({
        type: GET_OTP,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

export const fetchUser = () => async (dispatch) => {
  try {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user,
      });
    }
  } catch (error) {
    console.log(error.message);
    Toast.show('Something went wrong!');
  }
};

//To loginWithEmailPassword
export const loginWithEmailPassword = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/login',
        data,
      };
      const response = await axios(body);

      //Dispatch User Token
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      //Catch Login Error
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To clearLoginDetailsProps
export const clearLoginDetailsProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: LOGIN_SUCCESS,
          payload: undefined,
        }),
      );
    });
};

export const isAuthenticatedFunc = (isAuthenticated) => {
  dispatch({
    type: IS_AUTHENTICATED,
    payload: { response: isAuthenticated, error: false },
  });
};

//To forgetPassword
export const forgetPassword = (data) => {
  console.log('forgetPassword -> data', data);
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/forgotPassword',
        data,
      };
      const response = await axios(body);
      console.log('forgetPassword -> response', response);

      //Dispatch User Token
      dispatch({
        type: FORGOT_PASSWORD,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      console.log('forgetPassword -> error', error);
      //Catch Login Error
      dispatch({
        type: FORGOT_PASSWORD,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To clearLoginDetailsProps
export const clearForgetPasswordProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: LOGINFORGOT_PASSWORD_SUCCESS,
          payload: undefined,
        }),
      );
    });
};
