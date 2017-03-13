import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import paymentForm from "./reducers";
import PaymentDash from './components/PaymentDash/PaymentDash.component';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
  paymentForm,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <PaymentDash />
  </Provider>,
  document.getElementById('root')
);
