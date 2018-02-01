import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmailTextbox from './EmailTextbox';

class RightSidebar extends Component {
  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <h4>Sign-Up To Get Emails</h4>
        <p>New job postings are sent right to your inbox weekly.</p>
        <EmailTextbox />
        <br />

        <h4>Get Found By Employers!</h4>
        <Link to="/submit-your-resume">
          <button className="btn btn-primary btn-block btn-lg">
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
