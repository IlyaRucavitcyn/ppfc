import React, {Component} from 'react';
import CardNumberInput from '../CardNumberInput/CardNumberInput.component';
import CVCInput from '../CVCInput/CVCInput.component';
import ExpirationInput from '../ExpirationInput/ExpirationInput.component';
import SubmitButtonInput from '../SubmitButtonInput/SubmitButtonInput.component';
import style from './CreditCardForm.component.css';

export default class CreditCardForm extends Component{
  render(){
    return (
      <form className={style.form}>
          <div className={style.title}>
              <h3 className={style.subheading}>Pay with credit card</h3>
              <div className={style.logo}>
                <img className={style.image} src="../../images/visa.svg" alt="Visa" width="85" height="27" />
              </div>
          </div>
          <CardNumberInput />
          <ExpirationInput />
          <CVCInput />
          <SubmitButtonInput />
      </form>
    );
  }
}
