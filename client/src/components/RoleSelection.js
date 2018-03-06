import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class RoleSelection extends Component {
  render() {
    return (
      <div className="container content-container">
        <img src="../../img/mountain-background.jpeg" alt="bg" className="bg" />
        <h2>Are you a teacher or employer?</h2>
        <div className="extended">
          <div className="row">
            <div className="col-md-6">
              <div className="well">
                <img
                  src="/img/teacher.jpg"
                  className="role-image"
                  onClick={this.props.selectTeacher}
                />
                <br />

                <button
                  onClick={this.props.selectTeacher}
                  className="btn-primary btn btn-block"
                >
                  Teacher/Job Seeker
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="well">
                <Link to="/recruiter/application">
                  <img src="/img/recruiter.jpg" className="role-image" />
                </Link>
                <br />

                <Link to="/recruiter/application">
                  <button className="btn-primary btn btn-block">
                    Employer/School District
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RoleSelection);
