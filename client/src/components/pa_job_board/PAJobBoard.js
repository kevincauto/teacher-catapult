import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../RightSidebar';
import EmailTextbox from '../EmailTextbox';
import SmallBanner from '../advertisements/SmallBanner';
import './pa-job-board.css';

class PAJobBoard extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  handleFilterText(e) {
    this.setState({ filterText: e.target.value });
  }

  sortByjobName = (arrOfJobs) => {
    return arrOfJobs.sort((a, b) => {
      const textA = a.jobTitle.trim().toUpperCase();
      const textB = b.jobTitle.trim().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  putPaedJobsLast = (arrOfJobs) => {
    const paedJobs = arrOfJobs.filter(job => job.schoolId === 'paed');
    const otherJobs = arrOfJobs.filter(job => job.schoolId !== 'paed')
    return otherJobs.concat(paedJobs);
  }

  renderTable(JSONArrJobs = [], ArrPaidJobs = []) {
    //filter using text input
    JSONArrJobs = this.putPaedJobsLast(this.sortByjobName(JSONArrJobs));

    // JSONArrJobs = ArrPaidJobs.reverse().concat(JSONArrJobs);
    JSONArrJobs = JSONArrJobs.filter(
      ({ jobTitle = '', city = '', county = '', state = '', sd = '' }) => {
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
          sd.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
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
                    href={job.jobUrl}
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
                  Teaching Jobs in PA<br />
                </h2>
                <h3>Hundreds of Jobs for Pennsylvania Teachers!</h3>
              </center>
              <p>
                Use the <strong>Text Filter</strong> box to narrow down the table. Try typing a
                keyword like "elementary", "social studies", "allegheny county",
                or "bucks county" to find exactly what you are looking for.
              </p>

              <input
                type="text"
                className="filter-input"
                placeholder="Filter results..."
                value={this.state.filterText}
                onChange={e => this.handleFilterText(e)}
              />
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
              <div className="sidebar-border full-screen-only">
                <h4>Sign-Up To Get Emails</h4>
                <p>New job postings are sent right to your inbox weekly.</p>
                <EmailTextbox />
                <br />
                <br />
              </div>
              <p className="description-paragraph">
                Teaching jobs in PA are scattered across hundreds of school
                district websites across the internet. Teacher Catapult's small
                army of teachers and volunteers are proud to bring you hundreds
                of Pennsylvania teaching jobs. We love
                teachers and we do our best to find as many teaching jobs in PA
                that we can. We target all areas of Pennsylvania as well as all
                teaching specialities and grade levels.
              </p>
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

export default connect(mapStateToProps)(PAJobBoard);
