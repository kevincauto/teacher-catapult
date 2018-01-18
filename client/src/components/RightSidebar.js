import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

class RightSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleEmailSubmisstion = this.handleEmailSubmisstion.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  handleChange(e) {
    this.setState({ email: e.target.value });
  }
  handleEmailSubmisstion() {
    console.log(validateEmail(this.state.email));
    // this.props.submitEmail(this.state.email)
  }

  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <h4>Sign-Up To Get Emails</h4>
        <p>New job postings are sent right to your inbox weekly.</p>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email Address..."
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

        <br />

        <h4>Get Found By Employers!</h4>
        <Link to="/submit-your-resume">
          <button className="btn btn-primary btn-block">
            <span className="white-link">Submit Your Resume</span>
          </button>
        </Link>
        <br />

        <h4>Ad</h4>
        <img src="http://placehold.it/250x230/eee" alt="sidebar ad" />
      </div>
    );
  }
}

export default connect(null, actions)(RightSidebar);
