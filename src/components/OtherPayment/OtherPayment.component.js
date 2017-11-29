import React,{Component} from 'react';
import style from './OtherPayment.component.css';
import PayPalLink from '../PayPal/PayPal.component';

export default class OtherPayment extends Component{
  render(){
    return (
      <div className={style.readressing}>
          <p className={`${style.text} ${style.centered}`}>or select other payment method</p>
          <PayPalLink />
      </div>
    );
  }
}
