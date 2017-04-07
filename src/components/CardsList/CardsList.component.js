import React, {Component} from 'react';
import style from './CardsList.component.css';
import {hashHistory} from 'react-router';
import {connect} from "react-redux";

class CardsList extends Component {

    constructor(props) {
        super(props);
        this.createCardList = this.createCardList.bind(this);
    }

    createCardList() {
        const list = [];
        for (let i = 0; i < this.props.cards.length; i++) {
            let item = (
                <a key={i} className={`${style.link}`} href="#/new" onClick = {(e) =>{
                    e.preventDefault();
                    hashHistory.push('/new');
                  }}>
                    <span className={`${style.content}`}>
                        {`${this.props.cards[i].cardNumber.value}`}
                    </span>
                    <span className={`${style.content}`}>
                        {`${this.props.cards[i].expiration.month}/${this.props.cards[i].expiration.year}`}
                    </span>
                </a>
            );
            list.push(item);
        };
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
