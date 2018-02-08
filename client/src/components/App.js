import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import PAJobs from './PAJobs';
import SubmitResume from './SubmitResume';
import PASalary from './PASalary';
import Articles from './Articles';
import Footer from './Footer';
import Interview from './Interview';
import NewJobPost from './job_posts/NewJobPost';
import DynamicJobPostPage from './job_posts/DynamicJobPostPage';
import RecruiterDashboard from './RecruiterDashboard';
import TermsConditions from './TermsConditions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchJobs();
    this.props.fetchPaidJobs();
    this.props.fetchLeads();
    this.props.fetchUserLeads();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/teaching-jobs-in-pa" component={PAJobs} />
          <Route exact path="/submit-your-resume" component={SubmitResume} />
          <Route exact path="/teacher-salary-in-pa" component={PASalary} />
          <Route
            exact
            path="/teaching-articles/teacher-interview-questions/"
            component={Interview}
          />
          <Route exact path="/job-post" component={NewJobPost} />
          <Route exact path="/teaching-articles" component={Articles} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Route path="/jobs/:id" component={DynamicJobPostPage} />
          <Route path="/recruiter/dashboard" component={RecruiterDashboard} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
