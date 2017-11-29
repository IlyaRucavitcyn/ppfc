import {
    actionTypes
} from "../constants"

const submitPayment = (state = [] , action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_PAYMENT:
            return [
              ...state,
              action.cardInfo
            ];
        default:
            return state;
    }
}

export default submitPayment;
