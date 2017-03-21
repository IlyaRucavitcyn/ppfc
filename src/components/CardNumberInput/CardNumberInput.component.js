import React, {Component} from 'react';
import {setCardNumber} from "../../actions";
import style from './CardNumberInput.component.css';
import {placeholders} from "../../constants";
import {connect} from 'react-redux';
import validation from "card-validator";

export default class CardNumberInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valid: true
        }
        this.setValidityOfNumber = this.setValidityOfNumber.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setValidityOfNumber(value) {
        return validation.number(value).isValid || validation.number(value).isPotentiallyValid;
    }

    handleChange(event) {
        let resultState = {
            value: event.target.value,
            valid: this.setValidityOfNumber(event.target.value)
        };
        this.setState(resultState);
        this.props.numberChanged(resultState);
    }

    render() {
        return (
            <div className={style.item}>
                <label className={style.label} htmlFor="card">Credit card number</label>
                <input className={`${style.input} ${this.state.valid
                    ? ""
                    : style.invalid}`} type="text" id="card" name="card_number" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}
