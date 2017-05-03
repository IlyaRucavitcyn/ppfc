import React, {Component} from 'react';
import style from './CardsList.component.css';
import {hashHistory, Link} from 'react-router';
import {connect} from "react-redux";

class CardsList extends Component {

    constructor(props) {
        super(props);
        this.createCardList = this
            .createCardList
            .bind(this);
    }

    createCardList() {
        const list = [];
        if (this.props.cards.length) {
            for (let i = 0; i < this.props.cards.length; i++) {
                let item = (
                    <Link
                        key={i}
                        className={`${style.link}`}
                        to={`#/new/${i}`}
                        onClick=
                        {(e) =>{ e.preventDefault(); hashHistory.push(`/new/${i}`); }}>
                        <span className={`${style.content}`}>
                            {`${this.props.cards[i].cardNumber.value}`}
                        </span>
                        <span className={`${style.content}`}>
                            {`${this.props.cards[i].expiration.month}/${this.props.cards[i].expiration.year}`}
                        </span>
                    </Link>
                );
                list.push(item);
            };
        }

        const newCardLink = (
            <Link
                key={ this.props.cards.length ? this.props.cards.length : 0}
                className={`${style.link}`}
                to={`#/new`}
                onClick=
                {(e) =>{ e.preventDefault(); hashHistory.push(`/new`); }}>
                <span className={`${style.content}`}>
                    New card
                </span>
            </Link>
        );
        list.push(newCardLink);
        return list;
    }

    render() {
        return (
            <div>
                {this.createCardList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {cards: state.cards}
}

export default connect(mapStateToProps)(CardsList);
