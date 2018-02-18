import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import getTodaysDate from '../utils/getTodaysDate';
import CheckBoxes from './SubmitResumeCheckBoxes';
import RecruiterSidebar from './RecruiterSidebar';
import { Link } from 'react-router-dom';
class RecruiterSignInSignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false,
      first: '',
      last: '',
      email: '',
      certifications: [],
      zipcode: '',
      relocate: true,
      resume: {},
      substitute: false,
      certMonth: '01',
      certYear: '2018',
      agree: false
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  handleSubmitResume() {
    console.log(this.state);
    this.props.submitResume(this.state);
    // this.setState({ redirect: true });
  }
  handleAgreeToTerms(value) {
    //value returns a string rather than a Boolean
    value = value === 'true' ? true : false;
    value = !value;
    this.setState({ agree: value });
  }
  handleFileUpload(file) {
    console.log('file', file[0]);
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
    let {
      first,
      last,
      email,
      zipcode,
      relocate,
      substitute,
      agree,
      username
    } = this.state;
    return (
      <div className="well well-lg clearfix">
        <h2>Please complete the information below.</h2>
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
            placeholder="Username"
            aria-describedby="sizing-addon1"
            name={'username'}
            value={username}
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
            value={last}
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
            placeholder="Email Address"
            aria-describedby="sizing-addon1"
            name={'email'}
            value={email}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <h3>What is your teaching certification?</h3>
        <CheckBoxes
          onSpecialtyChecked={specialty =>
            this.handleSpecialtyChecked(specialty)
          }
        />
        <h3>When did or when will you get your teaching certification?</h3>
        <div className="input-group input-group-lg job-form flex">
          <select
            className="form-control"
            placeholder="Month"
            value={this.state.certMonth}
            name="certMonth"
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select
            className="form-control"
            placeholder="Year"
            value={this.state.certYear}
            name="certYear"
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <h3>Where are you located?</h3>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Zipcode"
            aria-describedby="sizing-addon1"
            name={'zipcode'}
            value={zipcode}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <h3>Would you consider relocating for a job?</h3>
        <div className="input-group input-group-lg job-form">
          <select
            className="form-control"
            placeholder="Month"
            name="relocate"
            value={relocate}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <h3>Would you like to be considered for substitute jobs?</h3>
        <div className="input-group input-group-lg job-form">
          <select
            className="form-control"
            placeholder="Month"
            name="substitute"
            value={substitute}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <h4>
          Check the box if you agree to the terms and grant permission for us to
          share your information.
        </h4>
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
          onClick={() => this.handleSubmitResume()}
          // disabled={!(email && agree && resume)}
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
    let today = getTodaysDate();
    return (
      <div className="content-container container ">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <h1>Sign-in or Sign-up!</h1>
            {this.renderForm()}
          </div>
          <RecruiterSidebar />
        </div>
      </div>
    );
  }
}

export default RecruiterSignInSignUp;
