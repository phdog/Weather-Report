import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { stateTransformer } from 'redux-seamless-immutable';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/';
import 'babel-polyfill';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  stateTransformer: stateTransformer,
  collapsed: (getState, action, logEntry) => !logEntry.error
});

export const store = composeEnhancers(
  applyMiddleware(sagaMiddleware, loggerMiddleware)
)(createStore)(reducers);

const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga);

export default class ReduxWare extends Component {
  render() {
    return (
    <Provider store={store}>
      <Router history={history} key={Math.random()}>
        {this.props.routes}
      </Router>
    </Provider>
    );
  }
}
