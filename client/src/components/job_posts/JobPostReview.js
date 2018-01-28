import React, { Component } from 'react';

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
        <div className="well well-lg">
          <div>Job Title: {this.props.data.jobTitle}</div>
          <div>School District: {this.props.data.sd}</div>
          <div>City: {this.props.data.city}</div>
          <div>State: {this.props.data.state}</div>
          <div>County: {this.props.data.county}</div>
          <div>Description: {this.props.data.description}</div>
          {/* <div>Contact: {this.props.data.contact}</div> */}
          <button
            className="btn btn-warning"
            onClick={() => this.handleClickBack()}
          >
            <span
              className="glyphicon glyphicon-arrow-left"
              aria-hidden="true"
            />{' '}
            Back
          </button>
          <button
            className="btn btn-success pull-right"
            onClick={() => this.handleClickComplete()}
          >
            Purchase 1 Job Post for $19.99{' '}
            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
          </button>
          <button
            className="btn btn-success pull-right"
            onClick={() => this.handleClickComplete()}
          >
            Purchase 5 Job Posts for $49.99{' '}
            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
          </button>
          <button
            className="btn btn-success pull-right"
            onClick={() => this.handleClickComplete()}
          >
            Complete and Purchase{' '}
            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default JobPostReview;

// This is roughly how I envision it to work:
// You fetch the list of all jobs to be displayed on your jobs list
// This route might be /jobs, and it renders a component that takes the list of jobs and displays them in a table
// A user clicks on a link to a job, which pushes them to a /job/:job-id-or-slug route
// The /job/:id route mounts a component that that takes the job-id-or-slug and retrieves the job information to display
