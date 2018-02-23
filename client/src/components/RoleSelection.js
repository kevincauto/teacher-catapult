import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class RoleSelection extends Component {
  render() {
    return (
      <div className="container content-container">
        <h2>Are you a teacher or employer?</h2>

        <button onClick={this.props.selectTeacher} className="btn-primary btn">
          Teacher/Job Seeker
        </button>
        <Link to="/recruiter/application">
          <button className="btn-primary btn">Employer/School District</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, actions)(RoleSelection);
