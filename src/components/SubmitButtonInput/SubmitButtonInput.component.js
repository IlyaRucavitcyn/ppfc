import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './SubmitButtonInput.component.css';

export default class SubmitButtonInput extends Component {
    render() {
        return (
          <button className={style.submit}
                 type="submit"
                 name="name"
                 value=""
                 disabled={this.props.valid}>Pay Now</button>
        );
    }
}
