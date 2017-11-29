import {combineReducers} from 'redux';
import amountCreate from "./amount";
import submitPayment from "./submitPayment"

const paymentForm = combineReducers({
  amount:amountCreate,
  cards:submitPayment
});

export default paymentForm;
