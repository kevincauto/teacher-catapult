import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

class EmailTextbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      renderEmailFailureMessage: false,
      renderEmailSuccessMessage: false
    };
    this.handleEmailSubmisstion = this.handleEmailSubmisstion.bind(this);
    this.renderEmailMessage = this.renderEmailMessage.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  handleEmailSubmisstion() {
    let valid = false;
    valid = validateEmail(this.state.email);
    if (valid) {
      this.props.submitEmail(this.state.email);
      this.setState({
        email: '',
        renderEmailFailureMessage: false,
        renderEmailSuccessMessage: true
      });
    } else {
      //display error message.
      this.setState({
        renderEmailFailureMessage: true,
        renderEmailSuccessMessage: false
      });
    }
  }

  renderEmailMessage() {
    if (this.state.renderEmailSuccessMessage) {
      return (
        <div className="alert alert-success" role="alert">
          <span className="glyphicon glyphicon-ok-circle" aria-hidden="true" />
          <span className="sr-only">Success: </span>
          &nbsp;Email address successfully sent.
        </div>
      );
    } else if (this.state.renderEmailFailureMessage) {
      return (
        <div className="alert alert-danger" role="alert">
          <span
            className="glyphicon glyphicon-exclamation-sign"
            aria-hidden="true"
          />
          <span className="sr-only">Error: </span>
          &nbsp;Enter a valid email address
        </div>
      );
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="">
        <div className="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address..."
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <span className="input-group-btn">
            <button
              onClick={this.handleEmailSubmisstion}
              className="btn btn-default"
              type="button"
            >
              <span className="glyphicon glyphicon-envelope" />
            </button>
          </span>
        </div>
        {this.renderEmailMessage()}
      </div>
    );
  }
}

export default connect(null, actions)(EmailTextbox);
