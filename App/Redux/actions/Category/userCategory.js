import axios from 'axios';
import { GET_CATEGORY, GET_PACKAGE_LIST, GET_SUB_CATEGORY } from '../types';

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
