import React,{Component} from 'react';
import style from './CardNumberInput.component.css';

export default class CardNumberInput extends Component{
  render(){
    return (
      <div className={style.item}>
        <label className={style.label} htmlFor="card">Credit card number</label>
        <input className={style.input} type="text" id="card" name="card_number" value=""/>
      </div>
    );
  }
}
