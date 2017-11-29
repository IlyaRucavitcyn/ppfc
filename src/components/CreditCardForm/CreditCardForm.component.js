import React, {Component} from 'react';
import CardNumberInput from '../CardNumberInput/CardNumberInput.component';
import CVCInput from '../CVCInput/CVCInput.component';
import ExpirationInput from '../ExpirationInput/ExpirationInput.component';
import SubmitButtonInput from '../SubmitButtonInput/SubmitButtonInput.component';
import style from './CreditCardForm.component.css';
import {hashHistory} from 'react-router';
import {connect} from "react-redux";
import {setCardInfo} from "../../actions";
import validation from "card-validator";

class CreditCardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: {
                valid: true
            },
            expiration: {
                valid: true
            },
            cvc: {
                valid: true
            },
            valid: false
        }

        this.setInitialDate = this
            .setInitialDate
            .bind(this);
        this.onCardNumberChanged = this
            .onCardNumberChanged
            .bind(this);
        this.onExpirationInputChanged = this
            .onExpirationInputChanged
            .bind(this);
        this.onCvcChanged = this
            .onCvcChanged
            .bind(this);
        this.isFormValidToSubmit = this
            .isFormValidToSubmit
            .bind(this);
    };

    componentWillMount() {
        if (this.props.params.id) {
            this.setState(this.props.cards[this.props.params.id]);
        }
    }

    setInitialDate(newState) {
        this.setState({
            expiration: Object.assign({}, this.state.expiration, newState)
        });
    }

    onCardNumberChanged(newState) {
        this.setState({
            cardNumber: newState,
            valid: this.isFormValidToSubmit(newState.value, this.state.expiration.month, this.state.expiration.year, this.state.cvc.value)
        });
    }

    onExpirationInputChanged(newState) {
        this.setState({
            expiration: Object.assign({}, this.state.expiration, newState),
            valid: this.isFormValidToSubmit(this.state.cardNumber.value, newState.month || this.state.expiration.month, newState.year || this.state.expiration.year, this.state.cvc.value)
        });
    }

    onCvcChanged(newState) {
        this.setState({
            cvc: newState,
            valid: this.isFormValidToSubmit(this.state.cardNumber.value, this.state.expiration.month, this.state.expiration.year, newState.value)
        });
    }

    isFormValidToSubmit(number, month, year, cvc) {
        return validation
            .number(number)
            .isValid && validation
            .expirationMonth(month)
            .isValid && validation
            .expirationMonth(month)
            .isValidForThisYear && validation
            .expirationYear(year)
            .isValid && validation
            .cvv(cvc)
            .isValid
    };

    render() {
        return (
            <form
                className={style.form}
                onSubmit={(e) => {
                e.preventDefault();
                this
                    .props
                    .onSubmitCard(this.state);
                hashHistory.push('/');
            }}>
                <div className={style.title}>
                    <h3 className={style.subheading}>Pay with credit card</h3>
                    <div className={style.logo}>
                        <img
                            className={style.image}
                            src={"../../images/cards/" + (this.state.cardNumber.type
                            ? this.state.cardNumber.type
                            : "unknown-card") + ".png"}
                            alt="Visa"
                            width="85"/>
                    </div>
                </div>
                <CardNumberInput
                    onSubmitValidity={false}
                    currentCardValue={this.state.cardNumber}
                    numberChanged={(e) => {
                    this.onCardNumberChanged(e)
                }}/>
                <ExpirationInput
                    initialDate=
                    {(e) =>{this.setInitialDate(e)}}
                    currentCardValue={this.state.expiration}
                    expirationChanged=
                    {(e)=>{this.onExpirationInputChanged(e)}}/>
                <CVCInput
                    currentCardValue={this.state.cvc}
                    cardType={this.state.cardNumber.type}
                    cvcChanged=
                    {(e)=>{this.onCvcChanged(e)}}/>
                <SubmitButtonInput valid={!this.state.valid}/>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {cards: state.cards}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitCard(newCard) {
            dispatch(setCardInfo(newCard));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardForm)
