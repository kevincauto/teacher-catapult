//This parent component of JobForm, JobReview, and JobComplete
//This is a 3 page form wizard for posting a job.
import React, { Component } from 'react';
import JobPostForm from './JobPostForm';
import JobPostReview from './JobPostReview.js';
import RightSidebar from '../RightSidebar';

class NewJobPost extends Component {
  constructor() {
    super();
    this.state = {
      showTheForm: true,
      jobTitle: 'test text',
      sd: '',
      city: '',
      state: '',
      county: '',
      description: '',
      contact: ''
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickComplete = this.handleClickComplete.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }
  handleFormUpdate() {
    this.setState();
  }

  handleClickNext() {
    let formValidated = false;
    //validate form

    // if (formValidated) {
    this.setState({ showTheForm: false });
    // }
  }

  handleClickBack() {
    this.setState({ showTheForm: true });
  }

  handleClickComplete() {
    console.log('This is Complete!!!');
  }

  handleFieldChange(value, field) {
    this.setState({ [field]: value });
  }

  renderContent() {
    if (this.state.showTheForm === true) {
      return (
        <JobPostForm
          data={this.state}
          onClickNext={() => this.handleClickNext()}
          onFieldChange={(value, field) => this.handleFieldChange(value, field)}
        />
      );
    }
    if (this.state.showTheForm === false) {
      return (
        <JobPostReview
          data={this.state}
          onClickBack={this.handleClickBack}
          onClickComplete={this.handleClickComplete}
        />
      );
    }
  }

  render() {
    return (
      <div className="container content-container">
        <div className="row">
          {this.renderContent()}
          <RightSidebar />
        </div>
      </div>
    );
  }
}

export default NewJobPost;
