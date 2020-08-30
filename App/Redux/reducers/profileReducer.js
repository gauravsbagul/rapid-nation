import {
  CHANGE_PROFILE_PIC,
  GET_USER_PROFILE,
  UPDATE_ADDRESS,
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
    case CHANGE_PROFILE_PIC:
      return {
        ...state,
        changeProfilePic: payload,
      };
      break;
    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddressResponse: payload,
      };
      break;
    default:
      return state;
  }
}
