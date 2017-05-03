import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './CVCInput.component.css';
import {setCvc} from "../../actions";
import {placeholders, cardTypesId, cardTypesConst} from "../../constants";
import validation from "card-validator";

export default class CVCInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            valid: true
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    componentWillMount() {
        if (this.props.currentCardValue && this.props.currentCardValue.value) {
            this.setState({value: this.props.currentCardValue.value})
        }
    }

    handleChange(event) {
        const maxLength = (!!this.props.cardType && cardTypesId[this.props.cardType] === cardTypesConst["AMERICAN_EXPRESS"])
            ? 4
            : 3;
        const validateCvc = (cvc) => {
            return validation
                .cvv(cvc, maxLength)
                .isValid || validation
                .cvv(cvc, maxLength)
                .isPotentiallyValid
        };

        this.setState({
            value: event.target.value,
            valid: validateCvc(event.target.value)
        });

        this
            .props
            .cvcChanged({
                value: event.target.value,
                valid: validateCvc(event.target.value)
            });
    }

    render() {
        return (
            <div className={`${style.item} ${style.cvc}`}>
                <label
                    className={`${style.label} ${ (this.state.valid)
                    ? ""
                    : style.labelInvalid}`}
                    htmlFor="cvc-cw">CVC/CW</label>
                <input
                    className={`${style.input} ${ (this.state.valid)
                    ? ""
                    : style.invalid}`}
                    type="text"
                    id="cvc-cw"
                    name=""
                    placeholder={placeholders.CVC}
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <p className={`${style.text} ${style.left}`}>3 or 4 digits code</p>
            </div>
        );
    }
}
