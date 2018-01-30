import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';

class PAJobs extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  handleFilterText(e) {
    this.setState({ filterText: e.target.value });
  }

  renderTable(JSONArrJobs = [], ArrPaidJobs = []) {
    //filter using text inpu
    JSONArrJobs = ArrPaidJobs.reverse().concat(JSONArrJobs);
    JSONArrJobs = JSONArrJobs.filter(
      ({ jobTitle = '', city = '', county = '', state = '' }) => {
        if (
          jobTitle
            .toLowerCase()
            .indexOf(this.state.filterText.toLowerCase()) !== -1
        ) {
          return true;
        }
        if (
          city.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        ) {
          return true;
        }
        if (
          county.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==
          -1
        ) {
          return true;
        }
        if (
          state.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==
          -1
        ) {
          return true;
        }
        return false;
      }
    );
    return JSONArrJobs.map((job, i) => {
      return (
        <tr key={job._id + i}>
          <td>
            <div className="row">
              <div className="col-sm-6">
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
                <br />
              </div>
              <div className="col-sm-4">
                {`${job.city}, ${job.state}`} <br />
                {job.county} <br />
              </div>
              <div className="col-sm-2 ">{job.date}</div>
            </div>
          </td>
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

              <p>
                Teaching jobs in PA are scattered across hundreds of school
                district websites across the internet. Teacher Catapult's small
                army of teachers and volunteers are proud to bring you hundreds
                of Pennsylvania teaching jobs updated every single day. We love
                teachers and we do our best to find as many teaching jobs in PA
                that we can. We target all areas of Pennsylvania as well as all
                teaching specialities and grade levels.
              </p>

              <p>
                Use the Search box to filter down the table. Try typing a
                keyword like "elementary", "social studies", "allegheny county",
                or "bucks county" to find exactly what you are looking for.
              </p>

              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={this.state.filterText}
                  onChange={e => this.handleFilterText(e)}
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
                    <th className="position">Job Information</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTable(this.props.jobs, this.props.paidjobs)}
                </tbody>
              </table>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ jobs, paidjobs }) {
  if (jobs && paidjobs) {
    return { jobs, paidjobs };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(PAJobs);
