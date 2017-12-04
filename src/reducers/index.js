import { combineReducers } from 'redux';
import auth from './AuthReducer';
import user from './UserReducer';
import pages from './PagesReducer';

export default combineReducers({
  auth,
  user,
  pages,
});
