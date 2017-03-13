export const actionTypes = {
  SET_CARD_NUMBER:"SET_CARD_NUMBER",
  SET_EXPIRATION_MONTH:"SET_EXPIRATION_MONTH",
  SET_EXPIRATION_YEAR:"SET_EXPIRATION_YEAR",
  SET_CVC:"SET_CVC"
};


export const placeholders = {
  CARD_NUMBER:"XXXX-XXXX-XXXX-XXXX",
  EXPIRATION_MONTH:"XX",
  EXPIRATION_YEAR:"XXXX",
  CVC:"XXX(X)"
}

export const CARD_NUMBER_PATTERN = /^\d{16}$/;

export const CVC_PATTERN = /^\d{3,4}$/;

export const AMOUNT = 570;
