import React, {Component} from 'react';
import style from './ExpirationInput.component.css';
import {connect} from 'react-redux';
import {setExpirationMonth, setExpirationYear} from "../../actions";
import validation from "card-validator";

export default class ExpirationInput extends Component {
    constructor(props) {
        super(props);
        this.currentDate = new Date();
        this.currentMonth = `${this.currentDate.getMonth() + 1}`;
        this.currentYear = `${this.currentDate.getFullYear()}`;
        this.state = {
            month: this.currentMonth,
            validMonth: true,
            year: this.currentYear,
            validYear: true
        }

        this.createMonthList = this.createMonthList.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    componentDidMount() {
      this.props.initialDate({
        month:this.currentMonth,
        year:this.currentYear
      })
    }

    handleMonthChange(event) {

        const monthValidate = (month) => {
            return validation.expirationMonth(month).isValid && validation.expirationMonth(month).isValidForThisYear
        }

        this.setState({
            month: event.target.value,
            validMonth: monthValidate(event.target.value)
        });

        this.props.expirationChanged({
          month: event.target.value,
          valid: monthValidate(event.target.value) && this.state.validYear
        });
    }

    handleYearChange(event) {

      const yearValidate = (year) => {
          return validation.expirationYear(event.target.value).isCurrentYear || validation.expirationYear(event.target.value).isValid
      }

        this.setState({
            year: event.target.value,
            validYear: yearValidate(event.target.value)
        })

        this.props.expirationChanged({
          year: event.target.value,
          valid: yearValidate(event.target.value) && this.state.validMonth
        })
    }

    createMonthList() {
        let list = [],
            currentMonth = this.currentDate.getMonth() + 1,
            setMonthToTwoSymbols = (month) => {
                return +month < 10
                    ? "0" + month
                    : month;
            };

        for (let i = 1; i <= 12; i++) {
            let option = <option key={i} value={`${i}`}>{setMonthToTwoSymbols(i)}</option>;
            list.push(option);
        }

        return list;
    }

    createYearList() {
        let list = [],
            currentYear = this.currentDate.getFullYear();

        for (let i = 0; i <= 6; i++) {
            let option = <option key={i} value={`${currentYear + i}`}>{currentYear + i}</option>;
            list.push(option);
        }

        return list;
    }

    render() {
        return (
            <div className={`${style.item} ${style.date}`}>
                <label className={`${style.label} ${ (this.state.validMonth)
                    ? ""
                    : style.labelInvalid}`} htmlFor="expiration">Expiration</label>
                <select className={`${style.input} ${ (this.state.validMonth)
                    ? ""
                    : style.invalid}`} type="text" name="" onChange={this.handleMonthChange} defaultValue={`${this.state.month}`}>
                    {this.createMonthList()}
                </select>
                <select className={`${style.input} ${ (this.state.validYear)
                    ? ""
                    : style.invalid}`} type="text" name="" onChange={this.handleYearChange} defaultValue={`${this.state.year}`}>
                    {this.createYearList()}
                </select>
            </div>
        );
    }
}
