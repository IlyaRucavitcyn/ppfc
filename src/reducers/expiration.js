import {
    actionTypes
} from "../constants"

const validateExpiration = (date) => {
    console.log("validate", date);
    let currentDate = new Date();
    return (date.year >= currentDate.getFullYear() && date.month >= (currentDate.getMonth() + 1));
}

const expirationYear = (state = new Date().getFullYear(), action) => {
    switch (action.type) {
        case (actionTypes.SET_EXPIRATION_YEAR):
            return action.year;
        default:
            return state;
    }
}

const expirationMonth = (state = new Date().getMonth() + 1, action) => {
    switch (action.type) {
        case (actionTypes.SET_EXPIRATION_MONTH):
            return action.month;
        default:
            return state;
    }
}

const expiration = (state = {
    date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
    },
    valid: true
}, action) => {
    switch (action.type) {
        case actionTypes.SET_EXPIRATION_YEAR:
            return Object.assign({}, state, {
                date: {
                    year: expirationYear(state.date.year, action),
                    month: state.date.month
                },
                valid: validateExpiration({
                  year:action.year,
                  month:state.date.month
                })
            });
        case actionTypes.SET_EXPIRATION_MONTH:
            return Object.assign({}, state, {
                date: {
                    year: state.date.year,
                    month: expirationMonth(state.date.month, action)
                },
                valid: validateExpiration({
                    year: state.date.year,
                    month: action.month
                })
            });
        default:
            return state;
    }
}

export default expiration;
