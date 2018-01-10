import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
    
    <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" /> 

    <div className="landing-page-text">
      <h1>
        Launch Your Pennsylvania<br />
        Teaching Career!
      </h1>
      <Link to="/teaching-jobs-in-pa" className="btn btn-primary">View Jobs</Link>&nbsp;
      <Link to="/submit-your-resume" className="btn btn-primary">Submit Your Resume</Link>&nbsp; 
      <Link to="/teaching-jobs-in-pa" className="btn btn-primary">For School Districts</Link>
    </div>
     
    </div>
  );
};

export default Landing;