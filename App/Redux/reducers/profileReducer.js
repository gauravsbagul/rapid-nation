import {
  FETCH_USER,
  FORGOT_PASSWORD,
  GET_OTP,
  IS_AUTHENTICATED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  GET_USER_PROFILE,
} from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        userProfileResponse: payload,
      };
      break;
    default:
      return state;
  }
}
