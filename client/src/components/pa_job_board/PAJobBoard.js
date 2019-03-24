import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../RightSidebar';
import EmailTextbox from '../EmailTextbox';
import SmallBanner from '../advertisements/SmallBanner';
import './pa-job-board.css';

class PAJobBoard extends Component {
  state = {
    filterText: '',

    sortByJob: false,
    jobReverseAlphabetical: false,

    sortByLocation: false,
    locationReverseAlphabetical: false,

    sortByDate: false,
    dateReverse: false,

    filterPhilly: false,
    filterPgh: false,

    doInitialSort: true,
  };

  handleFilterText = (e) => {
    this.setState({ filterText: e.target.value });
  }

  sortByjobName = (arrOfJobs) => {
    return arrOfJobs.sort((a, b) => {
      const textA = a.jobTitle.trim().toUpperCase();
      const textB = b.jobTitle.trim().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  sortByCityName = (arrOfJobs) => {
    return arrOfJobs.sort((a, b) => {
      const textA = a.city.trim().toUpperCase();
      const textB = b.city.trim().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  sortByDate = (arrOfJobs) => {
    return arrOfJobs.sort((a, b) => {
      const textA = a.date.trim().toUpperCase();
      const textB = b.date.trim().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }
  putPaedJobsLast = (arrOfJobs) => {
    const paedJobs = arrOfJobs.filter(job => job.schoolId === 'paed');
    const otherJobs = arrOfJobs.filter(job => job.schoolId !== 'paed')
    return otherJobs.concat(paedJobs);
  }

  tableHeaderJobInfoClicked = (arrOfJobs) => {
    const { jobReverseAlphabetical } = this.state;
    this.sortByjobName(arrOfJobs)
    console.log('jobReverseAlphabetical');
    console.log(jobReverseAlphabetical);
    const result = jobReverseAlphabetical ? arrOfJobs.reverse() : arrOfJobs;
    this.setState({
      sortByJob: false,
      jobReverseAlphabetical: !jobReverseAlphabetical,
      sortByLocation: false,
      locationReverseAlphabetical: false,
      sortByDate: false,
      dateReverse: false
    })
    return result;
  }
  tableHeaderLocationClicked = (arrOfJobs) => {
    const { locationReverseAlphabetical } = this.state;
    this.sortByCityName(arrOfJobs)

    const result = locationReverseAlphabetical ? arrOfJobs.reverse() : arrOfJobs;
    this.setState({
      sortByJob: false,
      jobReverseAlphabetical: false,
      sortByLocation: false,
      locationReverseAlphabetical: !locationReverseAlphabetical,
      sortByDate: false,
      dateReverse: false
    })
    return result;
  }
  tableHeaderDateClicked = (arrOfJobs) => {
    const { dateReverse } = this.state;
    this.sortByDate(arrOfJobs)

    const result = dateReverse ? arrOfJobs.reverse() : arrOfJobs;
    this.setState({
      sortByJob: false,
      jobReverseAlphabetical: false,
      sortByLocation: false,
      locationReverseAlphabetical: false,
      sortByDate: false,
      dateReverse: !dateReverse,
    })
    return result;
  }

  filterPhillyJobs = (arrOfJobs) => arrOfJobs
    .filter(job =>
      job.county === 'Philadelphia County' ||
      job.county === 'Bucks County' ||
      job.county === 'Montgomery County' ||
      job.county === 'Delaware County' ||
      job.county === 'Lehigh County' ||
      job.county === 'Berks County' ||
      job.county === 'Lancaster County' ||
      job.county === 'Northampton County'
    )

  filterPghJobs = (arrOfJobs) => arrOfJobs
    .filter(job =>
      job.county === 'Allegheny County' ||
      job.county === 'Lawrence County' ||
      job.county === 'Butler County' ||
      job.county === 'Beaver County' ||
      job.county === 'Armstrong County' ||
      job.county === 'Indiana County' ||
      job.county === 'Westmoreland County' ||
      job.county === 'Greene County' ||
      job.county === 'Somerset County' ||
      job.county === 'Fayette County'
    )

  renderTable(JSONArrJobs = [], ArrPaidJobs = []) {
    const { sortByJob, sortByLocation, sortByDate, doInitialSort, filterPhilly, filterPgh } = this.state;
    //filter using text input
    // JSONArrJobs = this.putPaedJobsLast(this.sortByjobName(JSONArrJobs));
    if (doInitialSort && JSONArrJobs.length > 0) {
      JSONArrJobs = this.sortByjobName(JSONArrJobs);
      this.setState({ doInitialSort: false })
    }
    if (sortByJob) { JSONArrJobs = this.tableHeaderJobInfoClicked(JSONArrJobs) }
    if (sortByLocation) { JSONArrJobs = this.tableHeaderLocationClicked(JSONArrJobs) }
    if (sortByDate) { JSONArrJobs = this.tableHeaderDateClicked(JSONArrJobs) }
    if (filterPhilly) { JSONArrJobs = this.filterPhillyJobs(JSONArrJobs) }
    if (filterPgh) { JSONArrJobs = this.filterPghJobs(JSONArrJobs) }

    JSONArrJobs = this.putPaedJobsLast(JSONArrJobs);

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
    const { filterPhilly, filterPgh } = this.state;
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
              {/* <p>
                Use the <strong>Text Filter</strong> box to narrow down the table. Try typing a
                keyword like "social studies", "allegheny county", "elementary", ,
                or "bucks county" to find exactly what you are looking for.
              </p> */}

              <input
                type="text"
                className="filter-input"
                placeholder="Search..."
                value={this.state.filterText}
                onChange={e => this.handleFilterText(e)}
              />
              <br />
              <div className='searchAreaRadio'>
                <span><input type="radio" name="searchArea" checked={!filterPhilly && !filterPgh} onChange={() => this.setState({ filterPhilly: false, filterPgh: false })} /> All PA </span>
                <span><input type="radio" name="searchArea" checked={filterPhilly} onChange={() => this.setState({ filterPhilly: true, filterPgh: false })} /> Phila/S.Eastern </span>
                <span><input type="radio" name="searchArea" checked={filterPgh} onChange={() => this.setState({ filterPhilly: false, filterPgh: true })} /> Pgh/S.Western </span>
              </div>

              <table className="table table-bordered table-striped table-hover">
                <thead>

                  <tr>
                    <td>
                      <div className='row'>
                        <div className="table-header col-sm-6" onClick={() => this.setState({ sortByJob: true })}>Job Information</div>
                        <div className="table-header vanishing-header col-sm-4" onClick={() => this.setState({ sortByLocation: true })}>Location</div>
                        <div className="table-header vanishing-header col-sm-2" onClick={() => this.setState({ sortByDate: true })}>Date</div>
                      </div>
                    </td>

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
