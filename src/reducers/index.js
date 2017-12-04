import { combineReducers } from 'redux';
import auth from './AuthReducer';
import user from './UserReducer';
import pages from './PagesReducer';
import newUser from './NewUserReducer';

export default combineReducers({
  auth,
  user,
  pages,
  newUser,
});
