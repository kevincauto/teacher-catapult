import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PAJobs extends Component {
  renderTable() {
    console.log(this.props.jobs);
    let arr = this.props.jobs;
    console.log(arr);

    // return arr.map(job => {
    //   return (
    //     <tr key={job._id}>
    //       <td>
    //         <strong>
    //           <a
    //             href={job.link}
    //             target="_blank"
    //             rel="noopener noreferrer nofollow"
    //           >
    //             {job.jobTitle}
    //           </a>
    //         </strong>
    //         <br />
    //         {job.sd}
    //         <span className="address">
    //           <br />
    //         </span>
    //       </td>
    //       <td>{`${job.city}, ${job.county}, ${job.state}`}</td>
    //       <td>${job.date} </td>
    //     </tr>
    //   );
    // });
  }

  render() {
    return (
      <div className="container">
        <img src="http://placehold.it/468x60/eee" alt="half masthead ad" />
        <br />
        <br />
        <div className="content-container container">
          {/* <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" />  */}

          <div itemscope itemtype="http://schema.org/Product">
            <img
              itemprop="image"
              src="http://www.bettingsystemtruths.com/wp-content/uploads/2013/05/four_half-stars_0-1024x238.png"
              alt="Product Name"
              style={{ width: '60px' }}
            />
            <span itemprop="name">Product Name</span>
            <div
              itemprop="aggregateRating"
              itemscope
              itemtype="http://schema.org/AggregateRating"
            >
              <span itemprop="ratingValue">4.5</span>
              out of <span itemprop="bestRating">5</span>
              based on <span itemprop="ratingCount">301</span> user ratings.
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h2>
                  Teaching Jobs in PA<br /> Updated: Jan. 09, 2018
                </h2>
              </center>

              {/* <p>Teaching jobs in PA are scattered across hundreds of school district websites across the internet. Teacher Catapult's small army of teachers and volunteers are proud to bring you hundreds of Pennsylvania teaching jobs updated every single day. We love teachers and we do our best to find as many teaching jobs in PA that we can. We target all areas of Pennsylvania as well as all teaching specialities and grade levels.</p>

<p>
Use the Search box to filter down the table. Try typing a keyword like "elementary", "social studies", "allegheny county", or "bucks county" to find exactly what you are looking for.
</p> */}

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search" />
                  </button>
                </span>
              </div>
              <br />

              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th className="position">Job and District</th>
                    <th>Location</th>
                    <th>Date Posted/ Last Checked</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-md-4 col-lg-3">
              <h4>Sign-Up To Get Emails</h4>
              <p>New job postings are sent right to your inbox weekly.</p>
              <p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-envelope" />
                    </button>
                  </span>
                </div>
              </p>
              <br />
              <h4>Get Found By Employers!</h4>
              <Link to="/submit-your-resume">
                <button className="btn btn-primary btn-block">
                  <span className="white-link">Submit Your Resume</span>
                </button>
              </Link>
              <br />

              <h4>Ad</h4>
              <img src="http://placehold.it/250x230/eee" alt="sidebar ad" />
            </div>
            {/* END RIGHT SIDEBAR */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs };
}

export default connect(mapStateToProps)(PAJobs);
