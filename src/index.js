import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './store';

// import ReduxThunk from 'redux-thunk';
// import { applyMiddleware, createStore } from 'redux';
// import reducers from './reducers';
// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(ReduxThunk),
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
