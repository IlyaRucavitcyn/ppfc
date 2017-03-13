import {
    actionTypes,
    CVC_PATTERN
} from "../constants"

const validateCVC = (cvc) => {
    return CVC_PATTERN.test(cvc)
}

const cvcNumber = (state = {
    value: "",
    valid: true
}, action) => {
    switch (action.type) {
        case actionTypes.SET_CVC:
            return Object.assign({}, state, {
                value: action.cvc,
                valid: validateCVC(action.cvc)
            });
        default:
            return state;
    }
}

export default cvcNumber;
