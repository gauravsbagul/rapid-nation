import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  FETCH_USER,
  FORGOT_PASSWORD,
  GET_OTP,
  IS_AUTHENTICATED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  VERIFY_OTP,
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

      const OTPresponse = await getOTP(data.phone);

      //Dispatch User Token
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { response: response?.data, OTPresponse, error: false },
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

//To export const clearRegisterDetailsProps = () => {
export const clearOTPProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_OTP,
          payload: undefined,
        }),
      );
    });
};

export const getOTP = async (phone) => {
  try {
    const body = {
      method: 'POST',
      url: API + 'api/getOTP',
      data: {
        phone: phone,
      },
    };
    const response = await axios(body);
    return response?.data?.response;
  } catch (error) {}
};

//To clearOtpProps
export const clearOtpProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_OTP,
          payload: undefined,
        }),
      );
    });
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

      await AsyncStorage.setItem('userDetails', JSON.stringify(response?.data));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
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

//To isLoggedIn
export const isLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      const userDetails = await AsyncStorage.getItem('userDetails');
      if (userDetails) {
        isAuthenticatedFunc(true);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { response: JSON.parse(userDetails), error: false },
        });
      } else {
        isAuthenticatedFunc(false);
      }
    } catch (error) {
      isAuthenticatedFunc(false);
    }
  };
};

export const isAuthenticatedFunc = (isAuthenticated) => {
  return (dispatch) =>
    dispatch({
      type: IS_AUTHENTICATED,
      payload: { response: isAuthenticated, error: false },
    });
};

//To logout
export const logout = () => {
  return async (dispatch, getState) => {
    try {
      await AsyncStorage.removeItem('userDetails');

      isAuthenticatedFunc(false);
      dispatch({
        type: LOGOUT,
        payload: { response: 'Loggedout successfully', error: false },
      });
    } catch (error) {
      isAuthenticatedFunc(false);
    }
  };
};

//To forgetPassword
export const forgetPassword = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/forgotPassword',
        data,
      };
      const response = await axios(body);

      dispatch({
        type: FORGOT_PASSWORD,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To clearForgetPasswordProps
export const clearForgetPasswordProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: FORGOT_PASSWORD,
          payload: undefined,
        }),
      );
    });
};

//To verifyOTPFunc
export const verifyOTPFunc = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/verifyAccount',
        data,
      };
      const response = await axios(body);

      dispatch({
        type: VERIFY_OTP,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: VERIFY_OTP,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To clearVerifyOTPProps
export const clearVerifyOTPProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: VERIFY_OTP,
          payload: undefined,
        }),
      );
    });
};
