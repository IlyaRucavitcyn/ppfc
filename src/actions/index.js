import {
    actionTypes
} from '../constants';

export const setCardNumber = (number) => {
    return {
        type: actionTypes.SET_CARD_NUMBER,
        number
    }
}

export const setExpirationMonth = (month) => {
    return {
        type: actionTypes.SET_EXPIRATION_MONTH,
        month
    }
}

export const setExpirationYear = (year) => {
    return {
        type: actionTypes.SET_EXPIRATION_YEAR,
        year
    }
}

export const setCvc = (cvc) => {
    return {
        type: actionTypes.SET_CVC,
        cvc
    }
}
