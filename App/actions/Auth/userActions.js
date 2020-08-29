import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { FETCH_USER, LOGIN_SUCCESS, GET_OTP, REGISTER_SUCCESS } from '../types';

const API = 'https://portal.rapidnation.in/customer/';

//To loginWithEmailPassword
export const signUp = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + 'api/register',
        data,
      };
      const response = await axios(body);
      console.log('response loginWithEmailPassword ', response);

      //Dispatch User Token
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      console.log('signUp -> error', error);
      console.log('signUp -> error?.response', error?.response);
      //Catch Login Error
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To clearLoginDetailsProps
export const _clearLoginDetailsProps = () => {
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

export const getOTP = (phone) => {
  console.log('getOTP -> phone', phone);
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
      console.log('response getOTP ', response);

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

export const register = () => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      name: 'supriyo',
      email: 'supriyo@gmail.com',
    },
  });
};
