import * as adapters from '../adapters';
import * as types from './types';

export const logIn = (username, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  const user = await adapters.auth(username, password);
  if (!user.error) {
    await localStorage.setItem('token', user.jwt);
    dispatch({ type: types.SET_USER, username: user.username, id: user.id });
    dispatch({ type: types.LOGIN_SUCCESS });
  } else {
    dispatch({ type: types.LOGIN_FAILURE, message: user.error });
  }
};

export const logOut = () => async (dispatch) => {
  await localStorage.removeItem('token');
  dispatch({ type: types.CLEAR_USER });
  dispatch({ type: types.LOGOUT_SUCCESS });
};

export const authorized = user => (dispatch) => {
  dispatch({ type: types.SET_USER, username: user.username, id: user.id });
  dispatch({ type: types.LOGIN_SUCCESS });
};

export const createUser = newUser => async (dispatch) => {
  dispatch({ type: types.CREATE_REQUEST });
  const user = await adapters.createUser(newUser);
  if (!user.error) {
    dispatch({ type: types.SET_USER, username: user.username, id: user.id });
    dispatch({ type: types.CREATE_SUCCESS });
  } else {
    dispatch({ type: types.CREATE_FAILURE, message: user.error });
  }
};
