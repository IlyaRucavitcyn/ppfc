export const actionTypes = {
    SET_CARD_NUMBER: "SET_CARD_NUMBER",
    SET_EXPIRATION_MONTH: "SET_EXPIRATION_MONTH",
    SET_EXPIRATION_YEAR: "SET_EXPIRATION_YEAR",
    SET_CVC: "SET_CVC"
};


export const placeholders = {
    CARD_NUMBER: "XXXX-XXXX-XXXX-XXXX",
    EXPIRATION_MONTH: "XX",
    EXPIRATION_YEAR: "XXXX",
    CVC: "XXX(X)"
}

export const CARD_NUMBER_PATTERN = /^\d{16}$/;

export const CVC_PATTERN = /^\d{3,4}$/;

export const AMOUNT = 570;

export const cardTypesId = {
    "visa": 1,
    "master-card": 2,
    "american-express": 3,
    "diners-club": 4,
    "discover": 5,
    "jcb": 6,
    "unionpay": 7,
    "maestro": 8
};

export const cardTypesConst = {
    VISA: 1,
    MASTERCARD: 2,
    AMERICAN_EXPRESS: 3,
    DINERS_CLUB: 4,
    DISCOVER: 5,
    JCB: 6,
    UNIONPAY: 7,
    MAESTRO: 8
}
