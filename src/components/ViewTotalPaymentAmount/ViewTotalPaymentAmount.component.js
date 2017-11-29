import React, {Component} from 'react';
import { connect } from 'react-redux';
import style from './ViewTotalPaymentAmount.component.css';
import CancelPayment from '../CancelPayment/CancelPayment.component'

class ViewTotalPaymentAmount extends Component {
    render() {
        return (
            <div className={style.payment}>
                <div className={style.amount}>
                    <p className={style.text}>To pay</p>
                    <p className={style.summ}>&#36;{this.props.amount}</p>
                </div>
                <CancelPayment/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    amount: state.amount
  }
}

export default connect(mapStateToProps)(ViewTotalPaymentAmount)
