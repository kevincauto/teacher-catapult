import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmailTextbox from './EmailTextbox';
import SquareAd from './advertisements/SquareAd';
import './right-sidebar.css';

class RightSidebar extends Component {
  render() {
    const { location = null } = this.props;
    return (
      <div className="col-md-4 col-lg-3">
        <div className="sidebar-border">
          <h4>Sign-Up To Get Emails</h4>
          <p>New job postings are sent right to your inbox weekly.</p>
          <EmailTextbox />
          <br />
        </div>
        {/* <div className="sidebar-border">
          <h4>Get Found By Employers!</h4>
          <Link to="/submit-your-resume">
            <button className="btn btn-primary btn-block">
              <span className="white-link">Submit Your Resume</span>
            </button>
          </Link>
        </div> */}

        <div className="">
          <h4>Ad</h4>
          <div className="square-ad">
            <SquareAd />
          </div>
        </div>
        <div>
          {/* <div className="social-sharing">
            <h4 className="social-sharing-header">Please Share Our Website</h4>
            <div>
              <a
                className="social-link"
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.teachercatapult.com${location && location.pathname || ''}`}
              >
                Share on Facebook
          </a>
            </div>
            <div>
              <a
                className="social-link"
                target="_blank"
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.teachercatapult.com/teaching-jobs-in-pa&title=Teaching%20Jobs%20in%20Pennsylvania%20-%20Teacher%20Catapult&summary=Know%20someone%20looking%20for%20a%20teaching%20job%20in%20PA?%20%20Our%20job%20board%20has%20hundreds%20of%20jobs%20all%20in%20one%20place!&source=">
                Share on LinkedIn
          </a>
            </div>
          </div> */}
        </div>

      </div>
    );
  }
}

export default connect(null, actions)(RightSidebar);
