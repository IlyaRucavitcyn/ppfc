import React, {Component} from 'react';
import CardNumberInput from '../CardNumberInput/CardNumberInput.component';
import CVCInput from '../CVCInput/CVCInput.component';
import ExpirationInput from '../ExpirationInput/ExpirationInput.component';
import SubmitButtonInput from '../SubmitButtonInput/SubmitButtonInput.component';
import style from './CreditCardForm.component.css';

export default class CreditCardForm extends Component {
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
            valid: true
        }

        this.setInitialDate = this.setInitialDate.bind(this);
        this.onCardNumberChanged = this.onCardNumberChanged.bind(this);
        this.onExpirationInputChanged = this.onExpirationInputChanged.bind(this);
        this.onCvcChanged = this.onCvcChanged.bind(this);
    };

    setInitialDate(newState) {
        this.setState({expiration: Object.assign({}, this.state.expiration, newState)});
    }

    onCardNumberChanged(newState) {
        this.setState({
            cardNumber: newState,
            valid: this.state.expiration.valid && this.state.cvc.valid && newState.valid
        });
    }

    onExpirationInputChanged(newState) {
        this.setState({
            expiration: Object.assign({}, this.state.expiration, newState),
            valid: this.state.cardNumber.valid && this.state.cvc.valid && newState.valid
        });
    }

    onCvcChanged(newState) {
        this.setState({
            cvc: newState,
            valid: this.state.cardNumber.valid && this.state.expiration.valid && newState.valid
        });
    }

    render() {
        return (
            <form className={style.form} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className={style.title}>
                    <h3 className={style.subheading}>Pay with credit card</h3>
                    <div className={style.logo}>
                        <img className={style.image} src={"../../images/cards/" + (this.state.cardNumber.type ? this.state.cardNumber.type : "unknown-card")+".png"} alt="Visa" width="85"/>
                    </div>
                </div>
                <CardNumberInput numberChanged={(e) => {
                    this.onCardNumberChanged(e)
                }}/>
                <ExpirationInput initialDate= {(e) =>{this.setInitialDate(e)}} expirationChanged= {(e)=>{this.onExpirationInputChanged(e)}}/>
                <CVCInput cardType = {this.state.cardNumber.type} cvcChanged= {(e)=>{this.onCvcChanged(e)}}/>
                <SubmitButtonInput valid={!this.state.valid}/>
            </form>
        );
    }
}
