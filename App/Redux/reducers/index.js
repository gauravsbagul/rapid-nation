import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import userCategory from './userCategory';

export default combineReducers({
  user: authReducer,
  profile: profileReducer,
  category: userCategory,
});
