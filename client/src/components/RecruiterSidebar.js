import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecruiterSidebar extends Component {
  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <div className="sidebar-border">
          <h4>
            Post a job to be featured on our job board viewed by thousands of
            users a week!
          </h4>
          <Link to="/job-post">
            <button className="btn btn-primary btn-block btn-lg">
              Submit a Job!
            </button>
          </Link>
        </div>
        <h4>Ad</h4>
        <img src="http://placehold.it/250x230/eee" alt="sidebar ad" />
      </div>
    );
  }
}

export default RecruiterSidebar;
