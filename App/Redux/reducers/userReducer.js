import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  FETCH_USER,
  GET_OTP,
} from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
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
        isAuthenticated: true,
        loading: false,
      };
    }
    case FETCH_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
}
