import React,{Component} from 'react';
import style from './ExpirationInput.component.css';

export default class ExpirationInput extends Component{
  render(){
    return (
      <div className={`${style.item} ${style.date}`}>
        <label className={style.label} htmlFor="expiration">Expiration</label>
        <input className={style.input} type="text" id="expiration" name="card_number" value=""/>
        <input className={style.input} type="text" id="expiration" name="card_number" value=""/>
      </div>
    );
  }
}
