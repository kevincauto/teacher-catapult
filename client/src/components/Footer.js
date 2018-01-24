import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmailTextbox from './EmailTextbox';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-bs">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-brand animated fadeInLeft">
              <h2>Teacher Catapult</h2>
              {/* <p>
                Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
                porttitor vitae orci nec ultricies. Curabitur vehicula, libero
                eget faucibus faucibus, purus erat eleifend enim, porta
                pellentesque ex mi ut sem.
              </p> */}
              <p>
                © {new Date().getFullYear()} Teacher Catapult, All rights
                reserved
              </p>
            </div>

            <div className="col-md-3 footer-social animated fadeInDown">
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link to="/teaching-jobs-in-pa">PA Teaching Jobs</Link>
                </li>
                <li>
                  <Link to="/teaching-articles/teacher-interview-questions/">
                    Interview Guide
                  </Link>
                </li>
                <li>
                  <Link to="/teaching-articles">Helpful Articles</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 footer-social animated fadeInDown">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="https://www.facebook.com/teachercatapult/">
                    Facebook
                  </a>
                </li>
                {/* <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li> */}
                {/* <li>
                  <a href="/">RSS</a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <p>Job opennings sent right to your inbox.</p>

              <div className="input-group">
                <EmailTextbox />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
