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
            Complete and Purchase{' '}
            <span className="glyphicon glyphicon-ok" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default JobPostReview;
