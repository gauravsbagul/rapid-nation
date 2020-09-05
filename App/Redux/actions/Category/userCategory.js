import axios from 'axios';
import {
  ADD_TO_CART,
  GET_ALL_SERVICES,
  GET_CATEGORY,
  GET_PACKAGE_LIST,
  GET_SUB_CATEGORY,
  GET_CART_BY_ID,
} from '../types';

const API = 'https://portal.rapidnation.in';

//To getCategory
export const getCategory = () => {
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;
      const body = {
        method: 'GET',
        url: API + '/category/api/getCategory',
      };
      const response = await axios(body);

      dispatch({
        type: GET_CATEGORY,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To  clearGetCategoryProps
export const clearGetCategoryProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_CATEGORY,
          payload: undefined,
        }),
      );
    });
};

export const getSubCategory = (data) => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'POST',
        url: API + '/subcategory/api/getSubCategory',
        data,
      };
      const response = await axios(body);

      dispatch({
        type: GET_SUB_CATEGORY,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_SUB_CATEGORY,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

//To  clearGetCategoryProps
export const clearGetSubCategoryProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_SUB_CATEGORY,
          payload: undefined,
        }),
      );
    });
};

export const getPackageList = () => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'GET',
        url: API + '/salonPackage/packagelist',
      };
      const response = await axios(body);
      dispatch({
        type: GET_PACKAGE_LIST,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_PACKAGE_LIST,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

export const clearPackageListProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_PACKAGE_LIST,
          payload: undefined,
        }),
      );
    });
};

export const getAllServces = () => {
  return async (dispatch, getState) => {
    try {
      const body = {
        method: 'GET',
        url: API + '/allservices/getAllServices',
      };
      const response = await axios(body);
      dispatch({
        type: GET_ALL_SERVICES,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SERVICES,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

export const clearGetAllServcesProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_ALL_SERVICES,
          payload: undefined,
        }),
      );
    });
};

export const addToCart = (data) => {
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;
      data.customer_id = loginResponse?.response?.response?.customerid;

      const body = {
        method: 'POST',
        url: API + '/cart/addCart',
        data,
      };
      const response = await axios(body);
      dispatch({
        type: ADD_TO_CART,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

export const clearAddToCartProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: ADD_TO_CART,
          payload: undefined,
        }),
      );
    });
};

export const getCartById = () => {
  return async (dispatch, getState) => {
    try {
      const { loginResponse } = getState().user;
      customer_id = loginResponse?.response?.response?.customerid;

      const body = {
        method: 'POST',
        url: API + '/cart/getCartByCid',
        data: {
          customer_id,
        },
      };
      const response = await axios(body);
      dispatch({
        type: GET_CART_BY_ID,
        payload: { response: response?.data, error: false },
      });
    } catch (error) {
      dispatch({
        type: GET_CART_BY_ID,
        payload: { response: error?.response, error: true },
      });
    }
  };
};

export const clearGetCartProps = () => {
  return (dispatch) =>
    new Promise((resolve) => {
      resolve(
        dispatch({
          type: GET_CART_BY_ID,
          payload: undefined,
        }),
      );
    });
};
