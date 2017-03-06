import React, {Component} from 'react';
import style from './PaymentDash.component.css';
import ViewTotalPaymentAmount from '../ViewTotalPaymentAmount/ViewTotalPaymentAmount.component';
import Payments from '../Payments/Payments.component';

export default class PaymentDash extends Component {
    render() {
        return (
            <section className={style.container}>
                <article className={style.form}>
                    <ViewTotalPaymentAmount />
                    <Payments />
                </article>
            </section>
        );
    }
}
