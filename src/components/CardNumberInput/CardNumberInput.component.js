import React,{Component} from 'react';
import {setCardNumber} from "../../actions";
import style from './CardNumberInput.component.css';
import {placeholders} from "../../constants";
import { connect } from 'react-redux';

class CardNumberInput extends Component{
  render(){
    return (
      <div className={style.item}>
        <label className={`${style.label} ${(!this.props.valid) ? style.labelInvalid : ""}`} htmlFor="card">Credit card number</label>
        <input className={`${style.input} ${(!this.props.valid) ? style.invalid : ""}`}
          type="text" id="card"
          name="card_number"
          placeholder = {placeholders.CARD_NUMBER}
          value={this.props.number}
          onChange = {(e) => {e.preventDefault(); this.props.onChange(e)}}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.cardNumber.number,
    valid: state.cardNumber.valid
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setCardNumber(e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardNumberInput)
