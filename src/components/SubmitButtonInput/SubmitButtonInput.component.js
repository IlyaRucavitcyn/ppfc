import React,{Component} from 'react';
import style from './SubmitButtonInput.component.css';

export default class SubmitButtonInput extends Component{
  render(){
    return(
      <input className={style.submit} type="submit" name="name" value="Pay Now"/>
    );
  }
}
