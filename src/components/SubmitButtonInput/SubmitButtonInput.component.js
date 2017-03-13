import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './SubmitButtonInput.component.css';

class SubmitButtonInput extends Component {
    render() {
        return (
          <button className={style.submit}
                 type="submit"
                 name="name"
                 value=""
                 disabled={!this.props.valid}>Pay Now</button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        valid: state.cvc.valid && state.cardNumber.valid
    }
}

export default connect(mapStateToProps)(SubmitButtonInput)
