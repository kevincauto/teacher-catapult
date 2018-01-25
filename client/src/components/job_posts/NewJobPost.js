//This parent component of JobForm, JobReview, and JobComplete
//This is a 3 page form wizard for posting a job.
import React, { Component } from 'react';
import JobPostForm from './JobPostForm';
import JobPostReview from './JobPostReview';
import RightSidebar from '../RightSidebar';

class NewJobPost extends Component {
  state = {
    showTheForm: true,
    jobTitle: '',
    sd: '',
    city: '',
    state: '',
    county: ''
  };

  handleFormUpdate() {
    this.setState();
  }

  renderContent() {
    if (this.state.showTheForm === true) {
      return <JobPostForm data={this.state} />;
    }
    if (this.state.showTheForm === false) {
      return <JobPostReview data={this.state} />;
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
