import React, { Component } from 'react';
import CheckBoxes from './SubmitResumeCheckBoxes';
import RightSidebar from './RightSidebar';
import { Link } from 'react-router-dom';
import SimpleReactFileUpload from './SimpleReactFileUpload';
import _ from 'lodash';

class SubmitResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      specialty: [],
      zipcode: '',
      relocate: true,
      resume: {},
      substitute: false,
      certMonth: '',
      certYear: '2018',
      agree: false
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.renderYearsDropdown = this.renderYearsDropdown.bind(this);
    this.handleSpecialtyChecked = this.handleSpecialtyChecked.bind(this);
    this.handleAgreeToTerms = this.handleAgreeToTerms.bind(this);
  }

  handleAgreeToTerms(value) {
    //value returns a string rather than a Boolean
    value = value === 'true' ? true : false;
    value = !value;
    this.setState({ agree: value });
  }
  handleFileUpload(file) {
    this.setState({ resume: file });
  }

  handleFieldChange(value, name) {
    this.setState({ [name]: value });
  }

  handleSpecialtyChecked(specialty) {
    let arrSpecialties = _.clone(this.state.specialty);

    let indexOfDuplicate = arrSpecialties.indexOf(specialty);
    if (indexOfDuplicate !== -1) {
      arrSpecialties.splice(indexOfDuplicate, 1);
    } else {
      arrSpecialties.push(specialty);
    }

    this.setState({ specialty: arrSpecialties });
  }

  renderYearsDropdown() {
    let y = new Date();
    y = y.getFullYear();
    let allYears = [];
    //User can select year options up to 75 years in the past
    //And up to 5 years into the future.
    for (let i = y - 75; i <= y + 5; i++) {
      allYears.push(i);
    }
    return allYears.map(year => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  }
  renderForm() {
    let {
      first,
      last,
      email,
      specialty,
      start,
      zipcode,
      relocate,
      substitute,
      agree
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
            placeholder="First Name"
            aria-describedby="sizing-addon1"
            name={'first'}
            value={first}
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
          >
            {this.renderYearsDropdown()}
          </select>
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

        <SimpleReactFileUpload onUpload={file => this.handleFileUpload(file)} />
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
              value={this.state.agree}
            />
            I agree with the <Link to="/">terms</Link>.
          </label>
        </div>
        <button
          className="btn btn-primary pull-right btn-lg"
          //   onClick={() => this.handleClickNext()}
          //   disabled={
          //     !(jobTitle && sd && city && state && description.length > 20)
          //   }
        >
          Next{' '}
          <span
            className="glyphicon glyphicon-arrow-right"
            aria-hidden="true"
          />
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="content-container container ">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <h1>Allow Employers to Find You!</h1>
            {this.renderForm()}
          </div>
          <RightSidebar />
        </div>
      </div>
    );
  }
}

export default SubmitResume;
