import { combineReducers } from 'redux';
import auth from './AuthReducer';
import user from './UserReducer';

export default combineReducers({
  auth,
  user,
});
