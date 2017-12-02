import { SET_USER, CLEAR_USER } from '../actions/types';

const initialState = {
  id: 0,
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        id: action.id,
        username: action.username,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};
