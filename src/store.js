import { applyMiddleware, createStore, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [
  ReduxThunk,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  reducers,
  initialState,
  composedEnhancers,
);

export default store;
