import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  ReduxThunk,
  routerMiddleware(history),
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
