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
            cardNumber: {},
            expiration: {},
            cvc: {},
            valid: true
        }

        this.onCardNumberChanged = this.onCardNumberChanged.bind(this);
    };

    onCardNumberChanged(newState) {
        this.setState({cardNumber: newState});
    }

    render() {
        return (
            <form className={style.form} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className={style.title}>
                    <h3 className={style.subheading}>Pay with credit card</h3>
                    <div className={style.logo}>
                        <img className={style.image} src="../../images/visa.svg" alt="Visa" width="85" height="27"/>
                    </div>
                </div>
                <CardNumberInput numberChanged={(e)=>{this.onCardNumberChanged(e)}}/>
                <ExpirationInput/>
                <CVCInput/>
                <SubmitButtonInput valid={!this.state.valid}/>
            </form>
        );
    }
}
