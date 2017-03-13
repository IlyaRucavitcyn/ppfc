import { actionTypes, CARD_NUMBER_PATTERN} from "../constants"

const validateCardNumber = (number) => {
  return CARD_NUMBER_PATTERN.test(number);
}

const cardNumber = (state = {
    number : "",
    valid: true
}, action) => {
    switch (action.type) {
        case actionTypes.SET_CARD_NUMBER:
            return Object.assign({},state,{
              number:action.number,
              valid:validateCardNumber(action.number)
            });
        default:
            return state;
    }
}

export default cardNumber;
