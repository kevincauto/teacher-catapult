import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';

class TermsConditions extends Component {
  render() {
    return (
      <div className="container">
        <img src="http://placehold.it/468x60/eee" alt="half masthead ad" />
        <br />
        <br />
        <div className="content-container container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h1>Terms & Conditions</h1>
              </center>
              <br />
              <h2>For Teacher and Resume Submitters</h2>
              <p>
                By submitting a resume to Teacher Catapult, you must agree to
                the following terms and conditions. The information that I have
                provided when submitting my resume and information is true and
                accurate to the best of your knowledge. I understand that
                Teacher Catapult will share my information with school
                districts, companies, individuals, and colleges. Teacher
                Catapult has my permission to do this.
              </p>
              <h2>For Employers and Resume Viewers</h2>
              <p>
                By submitting this application, you must agree to the following
                terms and conditions. You will use this service with the
                objective to find teachers for employment at your school
                district or organization. Teacher Catapult has the right to
                revoke your access if it feels necessary. Teacher information is
                not to be abused, used for unwarranted solicitation, or shared
                with anyone other than your approved organization.
              </p>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default TermsConditions;
