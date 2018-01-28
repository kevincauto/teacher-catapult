import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobPostReview extends Component {
  handleClickBack() {
    this.props.onClickBack();
  }

  handleClickComplete() {
    this.props.onClickComplete();
  }
  render() {
    return (
      <div className="col-md-8 col-lg-9">
        <h1>Review your job post information.</h1>
        <div className="well well-lg">
          <div>Job Title: {this.props.data.jobTitle}</div>
          <div>School District: {this.props.data.sd}</div>
          <div>City: {this.props.data.city}</div>
          <div>State: {this.props.data.state}</div>
          <div>County: {this.props.data.county}</div>
          <div>
            Description: <pre>{this.props.data.description}</pre>
          </div>
          <div className="well row">
            <h2>
              You currently have {this.props.auth.credits} job post credit{this
                .props.auth.credits === 1
                ? ''
                : 's'}.
            </h2>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.handleClickComplete()}
            >
              {/* <span
                className="glyphicon glyphicon-pushpin"
                aria-hidden="true"
              /> */}
              {'  '}
              Purchase 1 Job Post for $19.99
            </button>
            <br />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.handleClickComplete()}
            >
              {/* <span
                className="glyphicon glyphicon-pushpin"
                aria-hidden="true"
              /> */}
              {'  '}
              Purchase 5 Job Posts for $49.99
            </button>
          </div>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => this.handleClickBack()}
          >
            <span
              className="glyphicon glyphicon-arrow-left"
              aria-hidden="true"
            />{' '}
            Back
          </button>
          <button
            className={
              this.props.auth > 0
                ? 'btn btn-success pull-right btn-lg disabled'
                : 'btn btn-success pull-right btn-lg'
            }
            onClick={() => this.handleClickComplete()}
          >
            Complete &amp; Post{' '}
            <span
              className="glyphicon glyphicon-ok"
              aria-hidden="true"
              disabled
            />
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(JobPostReview);

// This is roughly how I envision it to work:
// You fetch the list of all jobs to be displayed on your jobs list
// This route might be /jobs, and it renders a component that takes the list of jobs and displays them in a table
// A user clicks on a link to a job, which pushes them to a /job/:job-id-or-slug route
// The /job/:id route mounts a component that that takes the job-id-or-slug and retrieves the job information to display
