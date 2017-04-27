import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import paymentForm from "./reducers";
import PaymentDash from './components/PaymentDash/PaymentDash.component';
import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();



const store = createStore(
  paymentForm, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <PaymentDash />
  </Provider>,
  document.getElementById('root')
);
