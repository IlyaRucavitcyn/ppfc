import React, {Component} from 'react';
import style from './ExpirationInput.component.css';
import { connect } from 'react-redux';
import {setExpirationMonth, setExpirationYear} from "../../actions";


class ExpirationInput extends Component {
    constructor(props) {
        super(props);
        this.createMonthList = this.createMonthList.bind(this);
        this.createYearList = this.createYearList.bind(this);
        this.currentDate = new Date();
    }

    createMonthList() {
        let list = [],
            currentMonth = this.currentDate.getMonth() + 1,
            setMonthToTwoSymbols = (month) => {
              return month < 10 ? "0" + month : month;
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

        for (let i = 0; i <= 4; i++) {
            let option = <option key={i} value={currentYear + i}>{currentYear + i}</option>;
            list.push(option);
        }

        return list;
    }

    render() {
        return (
            <div className={`${style.item} ${style.date}`}>
                <label className={`${style.label} ${(!this.props.valid) ? style.labelInvalid : ""}`} htmlFor="expiration">Expiration</label>
                <select className={`${style.input} ${(!this.props.valid) ? style.invalid : ""}`}
                        id="expiration"
                        name="card_number"
                        onChange = {(e) => {e.preventDefault(); this.props.onChangeMonth(e)}}
                        defaultValue={this.currentDate.getMonth()+1}>
                    {this.createMonthList()}
                </select>
                <select className={style.input}
                        type="text" id="expiration"
                        name="card_number"
                        onChange = {(e) => {e.preventDefault(); this.props.onChangeYear(e)}}
                        defaultValue={this.currentDate.getFullYear()}>
                    {this.createYearList()}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    year: state.expiration.date.year,
    month:state.expiration.date.month,
    valid: state.expiration.valid
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeYear: (e) => {
      dispatch(setExpirationYear(e.target.value))
    },
    onChangeMonth: (e) => {
      dispatch(setExpirationMonth(e.target.value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpirationInput)
