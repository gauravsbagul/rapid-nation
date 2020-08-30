import { GET_CATEGORY } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        getUserCategory: payload,
      };
      break;

    default:
      return state;
  }
}
