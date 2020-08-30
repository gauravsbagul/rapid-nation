import {
  FETCH_USER,
  FORGOT_PASSWORD,
  GET_OTP,
  IS_AUTHENTICATED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  VERIFY_OTP,
  LOGOUT,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: undefined,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: payload,
      };
      break;
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerResponse: payload,
      };
    }
    case GET_OTP: {
      return {
        ...state,
        otpResposnse: payload,
      };
    }
    case FETCH_USER:
      return {
        ...state,
        user: payload,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: payload,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: payload,
      };
    case VERIFY_OTP:
      return {
        ...state,
        verifyOTP: payload,
      };
    case LOGOUT:
      return {
        state: undefined,
        logout: payload,
      };
    default:
      return state;
  }
}
