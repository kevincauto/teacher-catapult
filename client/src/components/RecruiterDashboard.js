import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';
import getTodaysDate from '../utils/getTodaysDate';
import CheckBoxes from './SubmitResumeCheckBoxes';

const CERTIFICATIONS = [
  'Agriculture',
  'Art',
  'Autistic Support',
  'Behavior Specialist',
  'Business',
  'Computer Information Tech',
  'Citizenship',
  'Communications',
  'Cooperative Education',
  'Driver',
  'Early Childhood',
  'Elementary',
  'Emotional Support',
  'English',
  'English as a Second Language',
  'Environmental Education',
  'Family Consumer Science',
  'Foreign Language - Chinese',
  'Foreign Language - French',
  'Foreign Language - German',
  'Foreign Language - Hebrew',
  'Foreign Language - Italian',
  'Foreign Language - Japanese',
  'Foreign Language - Latin',
  'Foreign Language - Other',
  'Foreign Language - Spanish',
  'Gifted',
  'Guidance Counselor',
  'Health',
  'Language Arts',
  'Library Science',
  'Marketing',
  'Mathematics',
  'Music',
  'Psychologist',
  'Physical Education',
  'Principal',
  'Reading Specialist',
  'Science',
  'Social Studies',
  'Special Education',
  'Special Education - Hearing Impaired',
  'Special Education - Speech and Language',
  'Special Education - Visually Impaired',
  'Stem',
  'Superintendent',
  'Technology Education',
  'Theater',
  'Tutoring',
  'Vocational Instruction'
];

class RecruiterDashboard extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      filterCertification: ''
    };

    this.handleFilterText = this.handleFilterText.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  handleFilterText(e) {
    this.setState({ filterText: e.target.value });
  }

  renderCertificationDropdown() {
    return (
      <div className="input-group-lg">
        <select
          className="form-control"
          placeholder="Certification"
          value={this.state.certification}
          name="certification"
          onChange={e => this.handleFieldChange(e.target.value, e.target.name)}
        >
          <option placeholder="Certification">Any Certification</option>
          {CERTIFICATIONS.map(cert => {
            return (
              <option key={cert} value={cert}>
                {cert}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  renderTable(leads = [], userleads = []) {
    //filter using text input
    console.log(userleads);

    leads = leads.filter(lead => {
      let first = lead.first.toLowerCase();
      if (first.indexOf(this.state.filterText.toLowerCase() !== -1)) {
        return true;
      }
      return false;
    });

    leads = leads.map((lead, i) => {
      let {
        first,
        last,
        certifications,
        lastUpdated,
        email,
        relocate,
        resume,
        startDate,
        state,
        zipcode
      } = lead;

      certifications = certifications.reduce((prev, curr) => {
        if (prev === '') {
          return curr;
        }
        return prev + ', ' + curr;
      }, '');

      return (
        <tr key={i}>
          <td>
            <div className="row">
              <div className="col-sm-4">
                Last Updated: {lastUpdated}
                <br />
                <strong>
                  {first} {last}
                </strong>
                <br />
                {email}
                <br />
              </div>
              <div className="col-sm-5">
                {`${state}, ${zipcode}`} <br />
                Approx Exp: {startDate} <br />
              </div>
              <div className="col-sm-3 ">{certifications}</div>
            </div>
          </td>
        </tr>
      );
    });

    userleads = userleads.map((lead, i) => {
      let {
        first,
        last,
        certifications,
        lastUpdated,
        email,
        relocate,
        resume,
        startDate,
        zipcode
      } = lead;

      certifications = certifications.reduce((prev, curr) => {
        if (prev === '') {
          return curr;
        }
        return prev + ', ' + curr;
      }, '');

      return (
        <tr key={i + 'ul'}>
          <td>
            <div className="row">
              <div className="col-sm-4">
                Last Updated: {lastUpdated}
                <br />
                <strong>
                  {first} {last}
                </strong>
                <br />
                {email}
                <br />
              </div>
              <div className="col-sm-5">
                {zipcode} <br />
                Approx Exp: {startDate} <br />
              </div>
              <div className="col-sm-3 ">{certifications}</div>
            </div>
          </td>
        </tr>
      );
    });

    userleads.push(leads);
    return userleads;
  }

  render() {
    let today = getTodaysDate();
    return (
      <div className="container">
        <img src="http://placehold.it/468x60/eee" alt="half masthead ad" />
        <br />
        <br />
        <div className="content-container container">
          {/* <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" />  */}

          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h2>Your Dashboard {today}</h2>
              </center>
              <h3>Search for teachers...</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={this.state.filterText}
                      onChange={e => this.handleFilterText(e)}
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search" />
                      </button>
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  {this.renderCertificationDropdown()}
                </div>
              </div>
              <br />

              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th className="position">Teacher Candidates</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTable(this.props.leads, this.props.userleads)}
                </tbody>
              </table>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ leads, userleads }) {
  console.log(leads);
  console.log(userleads);
  if (leads && userleads) {
    return { leads, userleads };
  } else {
    console.log('else');
    return {};
  }
}

export default connect(mapStateToProps)(RecruiterDashboard);
