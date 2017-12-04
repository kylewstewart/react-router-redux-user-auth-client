import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  ADD_LOGIN_MESSAGE,
  CLEAR_LOGIN_MESSAGE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  isAuth: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isFetching: true,
        isAuth: false,
        message: '',
      };
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuth: true,
        message: '',
      };
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuth: false,
        message: action.message,
      };
    case LOGOUT_SUCCESS:
      return {
        isFetching: false,
        isAuth: false,
        message: '',
      };
    case ADD_LOGIN_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case CLEAR_LOGIN_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
