import {
    actionTypes
} from "../constants"

const validateExpiration = (date) => {
    let currentDate = new Date();
    return date.year >= currentDate.getFullYear() && date.month >= currentDate.getMonth()
}

const expirationYear = (state = new Date().getFullYear(), action) => {
    switch (action.type) {
        case (actionTypes.SET_EXPIRATION_YEAR):
            return action.year;
        default:
            return state;
    }
}

const expirationMonth = (state = new Date().getMonth(), action) => {
    switch (action.type) {
        case (actionTypes.SET_EXPIRATION_MONTH):
            return action.month;
        default:
            return state;
    }
}

const expiration = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SET_EXPIRATION_YEAR:
        case actionTypes.SET_EXPIRATION_MONTH:
            return Object.assign({}, state, {
                date: {
                    year: expirationYear(state.date.year, action),
                    month: expirationMonth(state.date.month, action)
                },
                valid: validateExpiration(state.date)
            });
        default:
            return state;
    }
}

export default expiration;
