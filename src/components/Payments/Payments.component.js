import React, {Component} from 'react';
import CreditCardForm from '../CreditCardForm/CreditCardForm.component';
import OtherPayment from '../OtherPayment/OtherPayment.component';
import style from './Payments.component.css';

export default class Payments extends Component{
  render(){
    return (
      <div className={style.controls}>
          <div className="">
              <h1 className={style.heading}>Payments</h1>
          </div>
          <CreditCardForm />
          <OtherPayment />
      </div>
    );
  }
}
