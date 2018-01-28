//This parent component of JobForm, JobReview, and JobComplete
//This is a 3 page form wizard for posting a job.
import React, { Component } from 'react';
import JobPostForm from './JobPostForm';
import JobPostReview from './JobPostReview.js';
import RightSidebar from '../RightSidebar';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class NewJobPost extends Component {
  constructor() {
    super();
    this.state = {
      showTheForm: true,
      redirect: false,
      jobTitle: '',
      sd: '',
      city: '',
      state: '',
      county: '',
      description: ''
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
    // let formValidated = false;
    //validate form

    // if (formValidated) {
    this.setState({ showTheForm: false });
    // }
  }

  handleClickBack() {
    this.setState({ showTheForm: true });
  }

  async handleClickComplete() {
    let { jobTitle, sd, city, state, county, description } = this.state;
    await this.props.submitJobPost({
      jobTitle,
      sd,
      city,
      state,
      county,
      description
    });
    this.setState({
      redirect: true
    });
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
    if (this.state.redirect) {
      return <Redirect to="/teaching-jobs-in-pa" />;
    }

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

export default connect(null, actions)(NewJobPost);
