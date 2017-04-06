import React, {Component} from 'react';
import CreditCardForm from '../CreditCardForm/CreditCardForm.component';
import OtherPayment from '../OtherPayment/OtherPayment.component';
import RouterPayments from '../RouterPayments/RouterPayments.component';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import style from './Payments.component.css';

export default class Payments extends Component{
  render(){
    return (
      <div className={style.controls}>
          <div className="">
              <h1 className={style.heading}>Payments</h1>
          </div>
          <Router history={hashHistory}>
            <Route path="/" component={RouterPayments}>
              <IndexRoute component={OtherPayment}/>
              <Route path="new" component={CreditCardForm}/>
              <Route path="*" component={()=>(<div>Not found...</div>)}/>
            </Route>
          </Router>
          <OtherPayment />
      </div>
    );
  }
}
