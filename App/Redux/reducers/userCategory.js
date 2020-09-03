import {
  GET_CATEGORY,
  GET_PACKAGE_LIST,
  GET_SUB_CATEGORY,
} from '../actions/types';

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
    case GET_PACKAGE_LIST:
      return {
        ...state,
        getPackageListResponse: payload,
      };
      break;
    default:
      return state;
  }
}
