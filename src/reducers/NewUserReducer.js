import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE } from '../actions/types';

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
        message: '',
      };
    case CREATE_FAILURE:
      return {
        isFetching: false,
        isCreated: false,
        message: action.message,
      };
    default:
      return state;
  }
};
