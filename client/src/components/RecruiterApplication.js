import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import getTodaysDate from '../utils/getTodaysDate';
import CheckBoxes from './SubmitResumeCheckBoxes';
import RecruiterSidebar from './RecruiterSidebar';
import { Link, Redirect } from 'react-router-dom';

class RecruiterApplication extends Component {
  constructor() {
    super();
    this.state = {
      sd: '',
      jobTitle: '',
      phone: '',
      redirect: false,
      first: '',
      last: '',
      email: '',
      agree: false,
      date: getTodaysDate()
    };
  }

  handleSubmitApplication() {
    this.props.submitRecruiterApplication(this.state);
    this.setState({ redirect: true });
  }

  handleAgreeToTerms(value) {
    //value returns a string rather than a Boolean
    value = value === 'true' ? true : false;
    value = !value;
    this.setState({ agree: value });
  }

  handleFileUpload(file) {
    this.setState({ resume: file[0] });
  }

  handleFieldChange(value, name) {
    this.setState({ [name]: value });
  }

  handleSpecialtyChecked(specialty) {
    let arrSpecialties = _.clone(this.state.certifications);
    let indexOfDuplicate = arrSpecialties.indexOf(specialty);

    if (indexOfDuplicate !== -1) {
      arrSpecialties.splice(indexOfDuplicate, 1);
    } else {
      arrSpecialties.push(specialty);
    }

    this.setState({ certifications: arrSpecialties });
  }

  renderWarning() {
    if (this.state.showZipcodeWarning === true) {
      return (
        <div className="alert alert-danger" role="alert">
          <span
            className="glyphicon glyphicon-exclamation-sign"
            aria-hidden="true"
          />
          <span class="sr-only">Error:</span>
          &nbsp;Please enter a valid zipcode
        </div>
      );
    }
    return;
  }

  renderForm() {
    let { first, last, jobTitle, sd, agree, email, phone } = this.state;
    return (
      <div className="well well-lg clearfix">
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-apple" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Job Title"
            aria-describedby="sizing-addon1"
            name={'jobTitle'}
            value={this.state.jobTitle}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="School District"
            aria-describedby="sizing-addon1"
            name={'sd'}
            value={this.state.sd}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span
              className="glyphicon glyphicon-briefcase"
              aria-hidden="true"
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-describedby="sizing-addon1"
            name={'first'}
            value={this.state.first}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-apple" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-describedby="sizing-addon1"
            name={'last'}
            value={this.state.last}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Work Email"
            aria-describedby="sizing-addon1"
            name={'email'}
            value={email}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number (and Extension)"
            aria-describedby="sizing-addon1"
            name={'phone'}
            value={this.state.phone}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <h4>Check the box if you agree to the terms.</h4>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="agree"
              defaultChecked={false}
              onChange={e => this.handleAgreeToTerms(e.target.value)}
              value={agree}
            />
            I agree with the{' '}
            <Link target="_blank" to="/terms-conditions">
              terms
            </Link>.
          </label>
        </div>
        <button
          className="btn btn-success pull-right btn-lg"
          onClick={() => this.handleSubmitApplication()}
          disabled={
            !(jobTitle && sd && first && last && email && phone && agree)
          }
        >
          Submit{' '}
          <span
            className="glyphicon glyphicon-arrow-right"
            aria-hidden="true"
          />
        </button>
      </div>
    );
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/recruiter/dashboard" />;
    }
    return (
      <div className="content-container container ">
        <img src="../../img/mountain-background.jpeg" alt="bg" className="bg" />
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <h1>
              {' '}
              Employers and School District Hiring Officers - Please Fill Out
              the Form Below.
            </h1>
            {this.renderForm()}
          </div>
          <RecruiterSidebar />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecruiterApplication);
