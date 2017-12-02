import * as adapters from '../adapters';
import * as types from './types';

export const logIn = (username, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  const user = await adapters.auth(username, password);
  if (!user.error) {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: types.SET_USER, username: user.username, id: user.id });
    dispatch({ type: types.LOGIN_SUCCESS });
  } else {
    dispatch({ type: types.LOGIN_FAILURE, message: user.error });
  }
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: types.CLEAR_USER });
  dispatch({ type: types.LOGOUT_SUCCESS });
};
