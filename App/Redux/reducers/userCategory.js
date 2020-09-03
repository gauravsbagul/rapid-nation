import { GET_CATEGORY, GET_SUB_CATEGORY } from '../actions/types';

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
    case GET_SUB_CATEGORY:
      return {
        ...state,
        getUserSubCategory: payload,
      };
      break;
    default:
      return state;
  }
}
