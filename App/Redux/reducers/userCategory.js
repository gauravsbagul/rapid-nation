import {
  GET_CATEGORY,
  GET_PACKAGE_LIST,
  GET_SUB_CATEGORY,
  GET_ALL_SERVICES,
  ADD_TO_CART,
  GET_CART_BY_ID,
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
    case GET_ALL_SERVICES:
      return {
        ...state,
        getAllServicesResponse: payload,
      };
      break;
    case ADD_TO_CART:
      return {
        ...state,
        addToCartResponse: payload,
      };
      break;
    case GET_CART_BY_ID:
      return {
        ...state,
        getCartResponse: payload,
      };
      break;
    default:
      return state;
  }
}
