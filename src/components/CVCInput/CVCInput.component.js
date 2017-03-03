import React,{Component} from 'react';
import style from './CVCInput.component.css';

export default class CVCInput extends Component{
  render(){
    return (
      <div className={`${style.item} ${style.cvc}`}>
        <label className={style.label} htmlFor="cvc-cw">CVC/CW</label>
        <input className={style.input} type="text" id="cvc-cw" name="card_number" value=""/>
        <p className={`${style.text} ${style.left}`}>3 or 4 digits code</p>
      </div>
    );
  }
}
