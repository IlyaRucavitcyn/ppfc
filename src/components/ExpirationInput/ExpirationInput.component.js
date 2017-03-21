import React, {Component} from 'react';
import style from './ExpirationInput.component.css';
import {connect} from 'react-redux';
import {setExpirationMonth, setExpirationYear} from "../../actions";
import validation from "card-validator";

export default class ExpirationInput extends Component {
    constructor(props) {
        super(props);
        this.currentDate = new Date();
        this.state = {
            month: this.currentDate.getMonth() + 1,
            validMonth: true,
            year: this.currentDate.getFullYear(),
            validYear: true
        }
        this.createMonthList = this.createMonthList.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    handleMonthChange(event) {
        this.setState({
            month: event.target.value,
            validMonth: validation.expirationMonth(event.target.value).isValid  &&
                        validation.expirationMonth(event.target.value).isValidForThisYear
        })
    }

    handleYearChange(event) {
        this.setState({
            year: event.target.value,
            validYear: validation.expirationYear(event.target.value).isCurrentYear ||
                       validation.expirationYear(event.target.value).isValid
        })
    }

    createMonthList() {
        let list = [],
            currentMonth = this.currentDate.getMonth() + 1,
            setMonthToTwoSymbols = (month) => {
                return month < 10
                    ? "0" + month
                    : month;
            };

        for (let i = 1; i <= 12; i++) {
            let option = <option key={i} value={i}>{setMonthToTwoSymbols(i)}</option>;
            list.push(option);
        }

        return list;
    }

    createYearList() {
        let list = [],
            currentYear = this.currentDate.getFullYear();

        for (let i = 0; i <= 6; i++) {
            let option = <option key={i} value={currentYear + i}>{currentYear + i}</option>;
            list.push(option);
        }

        return list;
    }

    render() {
        return (
            <div className={`${style.item} ${style.date}`}>
                <label className={`${style.label} ${ (this.state.validMonth) ? "" : style.labelInvalid }`}
                       htmlFor="expiration">Expiration</label>
                     <select className={`${style.input} ${ (this.state.validMonth) ? "" : style.invalid }`}
                          id="" name=""
                          onChange={this.handleMonthChange}
                          value={this.state.month}>
                    {this.createMonthList()}
                </select>
                <select className={`${style.input} ${ (this.state.validYear) ? "" : style.invalid }`}
                        type="text" id="" name=""
                        onChange={this.handleYearChange}
                        value={this.state.year}>
                    {this.createYearList()}
                </select>
            </div>
        );
    }
}
