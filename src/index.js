import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import paymentForm from "./reducers"
import PaymentDash from './components/PaymentDash/PaymentDash.component';

let store = createStore(paymentForm);

render(
  <Provider store={store}>
    <PaymentDash />
  </Provider>,
  document.getElementById('root')
);
