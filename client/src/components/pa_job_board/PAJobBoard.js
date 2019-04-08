import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../RightSidebar';
import EmailTextbox from '../EmailTextbox';
import SalaryTable from './SalaryTable';
import SmallBanner from '../advertisements/SmallBanner';
import { Helmet } from "react-helmet";
import querySearch from 'stringquery';
import { JSONLD, Product, AggregateRating } from 'react-structured-data';
import {
  getJobs,
  getPhillyJobs,
  getPghJobs,
  getLehighJobs,
  getPaDutchJobs,
  getErieJobs,
  getCentralJobs,
  getScrantonJobs,
} from '../../selectors/jobSelector';
import { salaries } from './salary-data';
import './pa-job-board.css';

class PAJobBoard extends Component {
  state = {
    filterText: '',
    dropdownClass: 'dropdown-content',

    sortByJob: false,
    jobReverseAlphabetical: false,

    sortByLocation: false,
    locationReverseAlphabetical: false,

    sortByDate: false,
    dateReverse: false,

    region: 'All of Pennsylvania',

    numberOfJobsDisplayed: null,
  };

  componentDidMount = () => {
    const { text = '', region } = querySearch(this.props.location.search);
    const textWithSpaces = text.replace(/%20/g, ' ');
    if (text) {
      this.setState({ filterText: textWithSpaces })
    }
    if (region) {
      if (region === 'philly') { this.setState({ region: 'Philadelphia Area' }) }
      if (region === 'pgh') { this.setState({ region: 'Pittsburgh/S.Western' }) }
      if (region === 'paDutch') { this.setState({ region: 'PA Dutch Country' }) }
      if (region === 'lehigh') { this.setState({ region: 'Lehigh Valley' }) }
      if (region === 'scranton') { this.setState({ region: 'Scranton/N.Eastern' }) }
      if (region === 'erie') { this.setState({ region: 'Erie/N.Western' }) }
      if (region === 'central') { this.setState({ region: 'State College/Central' }) }
    }
  }

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
  putPaedJobsLast = (arrOfJobs = []) => {
    const paedJobs = arrOfJobs.filter(job => job.schoolId === 'paed');
    const otherJobs = arrOfJobs.filter(job => job.schoolId !== 'paed')
    return otherJobs.concat(paedJobs);
  }

  tableHeaderJobInfoClicked = (arrOfJobs) => {
    const { jobReverseAlphabetical } = this.state;
    this.sortByjobName(arrOfJobs)
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

  dropDownClicked = () => {
    const { dropdownClass } = this.state;
    if (dropdownClass === 'dropdown-content') {
      this.setState({ dropdownClass: 'dropdown-content show' })
    }
    if (dropdownClass === 'dropdown-content show') {
      this.setState({ dropdownClass: 'dropdown-content' })
    }
  }

  renderTable(JSONArrJobs = [], ArrPaidJobs = []) {
    const {
      region,
      filterText,
      sortByDate,
      sortByJob,
      sortByLocation, } = this.state;
    const { lehighJobs, phillyJobs, pghJobs, paDutchJobs, erieJobs, scrantonJobs, centralJobs } = this.props;

    //by region
    if (region === 'Philadelphia Area') { JSONArrJobs = phillyJobs }
    if (region === 'Pittsburgh/S.Western') { JSONArrJobs = pghJobs }
    if (region === 'PA Dutch Country') { JSONArrJobs = paDutchJobs }
    if (region === 'Lehigh Valley') { JSONArrJobs = lehighJobs }
    if (region === 'Erie/N.Western') { JSONArrJobs = erieJobs }
    if (region === 'Scranton/N.Eastern') { JSONArrJobs = scrantonJobs }
    if (region === 'State College/Central') { JSONArrJobs = centralJobs }

    if (sortByJob) { JSONArrJobs = this.tableHeaderJobInfoClicked(JSONArrJobs) }
    if (sortByLocation) { JSONArrJobs = this.tableHeaderLocationClicked(JSONArrJobs) }
    if (sortByDate) { JSONArrJobs = this.tableHeaderDateClicked(JSONArrJobs) }

    // JSONArrJobs = this.putPaedJobsLast(JSONArrJobs);
    // JSONArrJobs = ArrPaidJobs.reverse().concat(JSONArrJobs);

    JSONArrJobs = JSONArrJobs.filter(
      ({ jobTitle = '', city = '', county = '', state = '', sd = '' }) => {
        if (jobTitle.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) { return true }
        if (city.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) { return true }
        if (county.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) { return true }
        if (sd.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) { return true }
        if (state.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) { return true }
        return false;
      }
    );
    return JSONArrJobs.map((job) => {
      return (
        <tr key={job.jobId}>
          <td>
            <div className="row">
              <div className="col-sm-6">
                <a
                  className="job-name"
                  href={job.jobUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {job.jobTitle}
                </a>
                <br />
                {job.sd}
                <br />
              </div>
              <div className="col-sm-4">
                {`${job.city}, ${job.state}`} <br />
                {job.county} <br />
                {parseInt(job.schoolId) > 0 && parseInt(job.schoolId) < 411 ? <a className='salary-link' href="#salary">View Salary Data</a> : null}
              </div>
              <div className="col-sm-2 ">{job.date}</div>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    const {
      dropdownClass,
      region,
      filterText,
      jobReverseAlphabetical,
      dateReverse,
      locationReverseAlphabetical
    } = this.state;
    const { location } = this.props;
    return (
      <div className="container">

        <Helmet>
          <title>Teaching Jobs in Pennsylvania - Teacher Catapult</title>
          <meta name="description" content="Looking for a teaching job in Pennsylvania? Our job board has hundreds of jobs all in one place." />

          <meta name="og:title" content="Teaching Jobs in Pennsylvania - Teacher Catapult" />
          <meta name="og:description"
            content="Looking for a teaching job in Pennsylvania? Our job board has hundreds of jobs all in one place." />
          <meta name="og:image" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
          <meta name="og:image:url" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
          <meta name="og:image:secure_url" content="https://www.teachercatapult.com/img/tc-new-jobs.png" />
        </Helmet>


        <img src="../../img/background.jpg" alt="bg" className="bg" />
        <a name="top"></a>
        <div className='masthead'>
          <SmallBanner />
        </div>

        <div className="content-container container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <center>
                <h2>
                  Teaching Jobs in Pennsylvania<br />
                </h2>
                <h3>Hundreds of Jobs for PA Teachers!</h3>
              </center>
              <div className="search-inputs">
                <input
                  type="text"
                  className="filter-input"
                  placeholder="Search..."
                  value={filterText}
                  onChange={e => this.handleFilterText(e)}
                />
                <br />
                <div className="dropdown">
                  <button onClick={() => this.dropDownClicked()} className="dropbtn">{region} {dropdownClass.includes('show') ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>} </button>
                  <div className={dropdownClass}>
                    <a onClick={() => this.setState({ dropdownText: 'All of Pennsylvania', dropdownClass: 'dropdown-content', region: 'All of Pennsylvania' })}>All Pennsylvania</a>
                    <a onClick={() => this.setState({ dropdownText: 'Philadelphia Area', dropdownClass: 'dropdown-content', region: 'Philadelphia Area' })}>Philadelphia Area</a>
                    <a onClick={() => this.setState({ dropdownText: 'Pittsburgh/S.Western', dropdownClass: 'dropdown-content', region: 'Pittsburgh/S.Western' })}>Pittsburgh/S.Western</a>
                    <a onClick={() => this.setState({ dropdownText: 'PA Dutch Country', dropdownClass: 'dropdown-content', region: 'PA Dutch Country' })}>Pennsylvania Dutch Country</a>
                    <a onClick={() => this.setState({ dropdownText: 'Lehigh Valley', dropdownClass: 'dropdown-content', region: 'Lehigh Valley' })}>Lehigh Valley</a>
                    <a onClick={() => this.setState({ dropdownText: 'Scranton/N.Eastern', dropdownClass: 'dropdown-content', region: 'Scranton/N.Eastern' })}>Scranton/N.Eastern</a>
                    <a onClick={() => this.setState({ dropdownText: 'Erie/N.Western', dropdownClass: 'dropdown-content', region: 'Erie/N.Western' })}>Erie/N.Western</a>
                    <a onClick={() => this.setState({ dropdownText: 'State College/Central', dropdownClass: 'dropdown-content', region: 'State College/Central' })}>State College/Central</a>
                  </div>
                </div>
              </div>

              <table className="table table-bordered table-striped table-hover">
                <thead>

                  <tr>
                    <td>
                      <div className='row'>
                        <div className="table-header col-sm-6" onClick={() => this.setState({ sortByJob: true })}>Job Information {jobReverseAlphabetical ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}</div>
                        <div className="table-header vanishing-header col-sm-4" onClick={() => this.setState({ sortByLocation: true })}>Location {locationReverseAlphabetical ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}</div>
                        <div className="table-header vanishing-header col-sm-2" onClick={() => this.setState({ sortByDate: true })}>Date {dateReverse ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}</div>
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
              <br />
              <a name="salary"></a>
              <h2>Salary Data*: Full-Time Classroom Teachers in Pennsylvania</h2>
              <br />
              <SalaryTable salaries={salaries} />
              <p>*Up-to-date as of May 2018, source: commonwealthfoundation.org</p>
              <p className="description-paragraph">
                Teaching jobs in PA are scattered across hundreds of school
                district websites across the internet. Teacher Catapult's small
                army of teachers and volunteers are proud to bring you hundreds
                of Pennsylvania teaching jobs. We love
                teachers and we do our best to find as many teaching jobs in PA
                that we can. We target all areas of Pennsylvania as well as all
                teaching specialities and grade levels.
              </p>
              <JSONLD>
                <Product name="Teacher Catapult Job Board">
                  <AggregateRating ratingValue={4.8} reviewCount={179} />
                </Product>
              </JSONLD>
            </div>

            <RightSidebar location={location} />
            <a href="#top">
              <div className="up-button">
                <i className="fas fa-caret-up"></i>
              </div>
            </a>

            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.teachercatapult.com/teaching-jobs-in-pa`} target="_blank" >
              <div className="social-footer">
                Please Share Us on Facebook
              </div>
            </a>

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { jobs, paidjobs } = state;
  if (jobs) {
    return {
      jobs: getJobs(state),
      paidjobs,
      phillyJobs: getPhillyJobs(state),
      pghJobs: getPghJobs(state),
      lehighJobs: getLehighJobs(state),
      paDutchJobs: getPaDutchJobs(state),
      scrantonJobs: getScrantonJobs(state),
      erieJobs: getErieJobs(state),
      centralJobs: getCentralJobs(state),
    };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(PAJobBoard);
