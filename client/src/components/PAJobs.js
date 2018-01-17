import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';

class PAJobs extends Component {
  renderTable(JSONArrJobs = []) {
    return JSONArrJobs.map(job => {
      console.log(job.date);
      return (
        <tr key={job._id}>
          <td>
            <strong>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {job.jobTitle}
              </a>
            </strong>
            <br />
            {job.sd}
            <span className="address">
              <br />
            </span>
          </td>
          <td>{`${job.city}, ${job.county}, ${job.state}`}</td>
          <td>{job.date} </td>
        </tr>
      );
    });
  }

  render() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '-' + dd + '-' + yyyy;
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
                <h2>
                  Teaching Jobs in PA<br /> Updated: {today}
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
                <tbody>{this.renderTable(this.props.jobs)}</tbody>
              </table>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ jobs }) {
  if (jobs) {
    return { jobs };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(PAJobs);
