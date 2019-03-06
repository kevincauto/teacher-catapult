import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* <img
        src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg"
        alt="bg"
        className="bg"
      /> */}

      <div className="landing-page-text">
        <h1 className="primary-header">
          Launch Your Pennsylvania<br />
          Teaching Career!
        </h1>
        <Link to="/teaching-jobs-in-pa" className="btn btn-primary btn-landing">
          View Jobs
        </Link>&nbsp;
        <Link to="/submit-your-resume" className="btn btn-primary btn-landing">
          Submit Your Resume
        </Link>
        {/* &nbsp; 
      <Link to="/teaching-jobs-in-pa" className="btn btn-primary">For School Districts</Link> */}
      </div>
    </div>
  );
};

export default Landing;
