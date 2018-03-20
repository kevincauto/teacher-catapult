import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaymentOneJobPost from '../PaymentOneJobPost';
import PaymentFiveJobPosts from '../PaymentFiveJobPosts';

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
        <img src="../../img/mountain-background.jpeg" alt="bg" className="bg" />
        <h1>Review your job post information.</h1>
        <div className="well well-lg">
          <div><strong>Job Title:</strong> {this.props.data.jobTitle}</div>
          <div><strong>School District:</strong> {this.props.data.sd}</div>
          <div><strong>City:</strong> {this.props.data.city}</div>
          <div><strong>State:</strong> {this.props.data.state}</div>
          <div><strong>County:</strong> {this.props.data.county}</div>
          <div className="newline">
            <strong>Description:</strong> <p className="description">{this.props.data.description}</p>
          </div>
          <div className="well row">
            <h2>
              You currently have {this.props.auth.credits} job post credit{this
                .props.auth.credits === 1
                ? ''
                : 's'}.
            </h2>
            <br />
            <PaymentOneJobPost />
            <br />
            <br />
            <PaymentFiveJobPosts />
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
              this.props.auth.credits > 0
                ? 'btn btn-success pull-right btn-lg'
                : 'btn btn-success pull-right btn-lg disabled'
            }
            disabled={this.props.auth.credits > 0 ? false : true}
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
