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

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchJobs();
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
          <Route exact path="/teaching-articles" component={Articles} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
