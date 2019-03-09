import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecruiterSidebar extends Component {
  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <div className="sidebar-border">
          <h4>
            Post a job to be featured on our job board viewed by thousands of
            users a week!
          </h4>
          <Link to="/job-post">
            <button className="btn btn-primary btn-block">Submit a Job!</button>
          </Link>
        </div>
        <h4>Ad</h4>
        <img src="http://placehold.it/250x230/eee" alt="sidebar ad" />
        {
          <div>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-6779320317509195"
              data-ad-slot="4041982672"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
          </div>
        }
      </div>
    );
  }
}

export default RecruiterSidebar;
