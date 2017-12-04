import { SET_ACTIVE_ITEM } from '../actions/types';

const initialState = 'log in';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return action.name;
    default:
      return state;
  }
};
