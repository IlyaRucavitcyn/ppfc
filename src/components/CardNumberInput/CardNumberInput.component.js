import React, {Component} from 'react';
import {setCardNumber} from "../../actions";
import style from './CardNumberInput.component.css';
import {placeholders} from "../../constants";
import {connect} from 'react-redux';
import validation from "card-validator";
import InputMask from "react-input-mask";

export default class CardNumberInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            type: null,
            valid: true
        }
        this.setValidityOfNumber = this
            .setValidityOfNumber
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    componentWillMount() {
        if (this.props.currentCardValue.value) {
            this.setState(this.props.currentCardValue)
        }
    }

    setValidityOfNumber(value) {
        return validation
            .number(value)
            .isValid || validation
            .number(value)
            .isPotentiallyValid;
    }

    handleChange(event) {
        let resultState = {
            value: event.target.value,
            type: validation
                .number(event.target.value)
                .card
                ? validation
                    .number(event.target.value)
                    .card
                    .type
                : null,
            valid: this.setValidityOfNumber(event.target.value)
        };
        this.setState(resultState);
        this
            .props
            .numberChanged(resultState);
    }

    render() {
        return (
            <div className={style.item}>
                <label className={style.label} htmlFor="card">Credit card number</label>
                <InputMask
                    className={`${style.input} ${this.state.valid
                    ? ""
                    : style.invalid}`}
                    type="text"
                    id="card"
                    name="card_number"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={placeholders.CARD_NUMBER}
                    mask="9999 9999 9999 9999 999"
                    maskChar=" "/>
            </div>
        );
    }
}
