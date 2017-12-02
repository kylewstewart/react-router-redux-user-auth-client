import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/types';

const intialState = {
  isFetching: false,
  isAuth: !!localStorage.getItem('token'),
};

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuth: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuth: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuth: false,
      };
    default:
      return state;
  }
};
