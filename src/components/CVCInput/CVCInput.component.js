import React,{Component} from 'react';
import { connect } from 'react-redux';
import style from './CVCInput.component.css';
import {setCvc} from "../../actions";
import {placeholders} from "../../constants";

class CVCInput extends Component{
  render(){
    return (
      <div className={`${style.item} ${style.cvc}`}>
        <label className={`${style.label} ${(!this.props.valid) ? style.labelInvalid : ""}`} htmlFor="cvc-cw">CVC/CW</label>
        <input className={`${style.input} ${(!this.props.valid) ? style.invalid : ""}`}
          type="text"
          id="cvc-cw"
          name="card_number"
          placeholder = {placeholders.CVC}
          value={this.props.cvc}
          onChange = {(e) => {e.preventDefault(); this.props.onChange(e)}}/>
        <p className={`${style.text} ${style.left}`}>3 or 4 digits code</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cvc: state.cvc.value,
    valid: state.cvc.valid
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(setCvc(e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CVCInput)
