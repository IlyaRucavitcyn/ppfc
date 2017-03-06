import React, {Component} from 'react';
import style from './ViewTotalPaymentAmount.component.css';
import CancelPayment from '../CancelPayment/CancelPayment.component'

export default class ViewTotalPaymentAmount extends Component {
    render() {
        return (
            <div className={style.payment}>
                <div className={style.amount}>
                    <p className={style.text}>To pay</p>
                    <p className={style.summ}>&#36;649</p>
                </div>
                <CancelPayment/>
            </div>
        );
    }
}
