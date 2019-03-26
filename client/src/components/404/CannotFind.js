import React, { Component } from 'react';
import RightSidebar from '../RightSidebar';
import EmailTextbox from '../EmailTextbox';
import SmallBanner from '../advertisements/SmallBanner';

class CannotFind extends Component {

  render() {
    return (
      <div className="container">
        <img src="../../img/background.jpg" alt="bg" className="bg" />
        <div className='masthead'>
          <SmallBanner />
        </div>

        <div className="content-container container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h2>
                  Sorry, we couldn't find what you were looking for.<br />
                </h2>
                <h3><a href="https://www.teachercatapult.com/teaching-jobs-in-pa">Check out our job board.</a></h3>
              </center>

              <div className="sidebar-border full-screen-only">
                <h4>Sign-Up To Get Emails</h4>
                <p>New job postings are sent right to your inbox weekly.</p>
                <EmailTextbox />
                <br />
                <br />
              </div>

            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default CannotFind;
