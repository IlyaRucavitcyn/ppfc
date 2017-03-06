import React, {Component} from 'react';
import style from './CancelPayment.component.css';

export default class CancelPayment extends Component {
    render() {
        return (
            <button className={style.cancel}>
                <p className={style.text}>Cancel your payment</p>
            </button>
        );
    }
}
