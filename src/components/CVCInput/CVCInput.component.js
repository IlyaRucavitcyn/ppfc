import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from './CVCInput.component.css';
import {setCvc} from "../../actions";
import {placeholders} from "../../constants";
import validation from "card-validator";

export default class CVCInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      value:"",
      valid:true
    };
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event){
  this.setState({
    value:event.target.value,
    valid:validation.cvv(event.target.value, 4).isValid || validation.cvv(event.target.value, 4).isPotentiallyValid
  })
}

  render(){
    return (
      <div className={`${style.item} ${style.cvc}`}>
        <label className={`${style.label} ${(this.state.valid) ? "" : style.labelInvalid }`} htmlFor="cvc-cw">CVC/CW</label>
        <input className={`${style.input} ${(this.state.valid) ? "" : style.invalid }`}
          type="text"
          id="cvc-cw"
          name=""
          placeholder = {placeholders.CVC}
          value={this.state.value}
          onChange = {this.handleChange}/>
        <p className={`${style.text} ${style.left}`}>3 or 4 digits code</p>
      </div>
    );
  }
}
