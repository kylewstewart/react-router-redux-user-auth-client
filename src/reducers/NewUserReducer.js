import {
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  ADD_NEWUSER_MESSAGE,
  CLEAR_NEWUSER_MESSAGE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  isCreated: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        isFetching: true,
        isCreated: false,
        message: '',
      };
    case CREATE_SUCCESS:
      return {
        isFetching: false,
        isCreated: true,
        message: 'A new user was created, please log in.',
      };
    case CREATE_FAILURE:
      return {
        isFetching: false,
        isCreated: false,
        message: action.message,
      };
    case ADD_NEWUSER_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case CLEAR_NEWUSER_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};
