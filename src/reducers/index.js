import {combineReducers} from 'redux';
import amountCreate from "./amount";
import cardNumber from "./cardNumber";
import cvcNumber from "./cvc";
import expiration from "./expiration";

const paymentForm = combineReducers({
  amount:amountCreate,
  cardNumber:cardNumber,
  cvc:cvcNumber,
  expiration:expiration
});

export default paymentForm;
