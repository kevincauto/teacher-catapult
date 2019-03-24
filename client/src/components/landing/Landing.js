import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <title>Teacher Catapult - Helping Pennsylvania Teachers Find Jobs</title>
        <meta name="description" content="Looking for a teaching job in Pennsylvaina? Our job board has hundreds of jobs all in one place." />

        <meta name="og:title" content="Teaching Jobs in Pennsylvania - Teacher Catapult" />
        <meta name="og:description"
          content="Looking for a teaching job in Pennsylvaina? Our job board has hundreds of jobs all in one place." />
        <meta name="og:image" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
        <meta name="og:image:url" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
        <meta name="og:image:secure_url" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
      </Helmet>
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
          View Our Job Board
        </Link>&nbsp;
        {/* <Link to="/submit-your-resume" className="btn btn-primary btn-landing">
          Submit Your Resume
        </Link> */}
        {/* &nbsp; 
      <Link to="/teaching-jobs-in-pa" className="btn btn-primary">For School Districts</Link> */}
      </div>
    </div>
  );
};

export default Landing;
