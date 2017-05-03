import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreditCardForm from '../CreditCardForm/CreditCardForm.component';
import CardsList from '../CardsList/CardsList.component';
import OtherPayment from '../OtherPayment/OtherPayment.component';
import RouterPayments from '../RouterPayments/RouterPayments.component';
import {Router, Route, hashHistory, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history'
import style from './Payments.component.css';

class Payments extends Component {
    componentDidMount() {
        // if (!this.props.cards.length) {
        //     hashHistory.push('/new');
        // }
        
    }

    render() {
        const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
        return (
            <div className={style.controls}>
                <div className="">
                    <h1 className={style.heading}>Payments</h1>
                </div>
                <Router history={appHistory}>
                    <Route path="/" component={RouterPayments}>
                        <IndexRoute component={CardsList}/>
                        <Route path="new" component={CreditCardForm}/>
                        <Route path="new/:id" component={CreditCardForm}/>
                        <Route path="*" component={() => (
                            <div>Not found...</div>
                        )}/>
                    </Route>
                </Router>
                <OtherPayment/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(Payments)
