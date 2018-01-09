import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
        <BrowserRouter>
        <div>
        <Header />
            <Route exact path="/" component={Landing} />
            <div className="container">
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>  
    );
  }
}

export default connect(null, actions)(App);