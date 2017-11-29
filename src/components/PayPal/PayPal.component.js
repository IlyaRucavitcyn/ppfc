import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import style from './style.paypal.css';

export default class PayPalLink extends Component {
    render() {
        return (
                <a className={`${style.link} ${style.centered}`} href="#">
                    <span className={`${style.content} ${style.centered}`}>Pay with</span>
                </a>
        );
    }
}
