import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { generateEmail } from './generateEmail';
import { getJobsSortedById } from '../../selectors/jobSelector';
import './admin-job-control-panel.css';

class AdminJobControlPanel extends Component {
  state = {
    addingNewJobSDId: null,
    addingNewJob: false,

    editingSDUrlId: null,
    editingSDUrl: false,
    sdUrl: '',

    jobEditId: null,
    jobName: '',
    jobUrl: '',
    date: '',

    emailTemplate: '',
  }

  handleEditSDUrl(id, sdUrl) {
    this.setState({
      editingSDUrlId: id,
      editingSDUrl: true,
      sdUrl,
    })
  }

  changeSDUrl = (e) => {
    this.setState({ sdUrl: e.target.value });
  };

  handleEditJob = (id, jobName, jobUrl, date) => {
    const today = this.getTodaysDate()

    this.setState({
      addingNewJob: false,
      addingNewJobSDId: null,
      editingSDUrlId: null,
      editingSDUrl: false,
      jobEditId: id,
      jobName,
      jobUrl,
      date: today,
    });
  }

  changeJobName = (e) => {
    this.setState({ jobName: e.target.value });
  };

  changeJobUrl = (e) => {
    this.setState({ jobUrl: e.target.value });
  };

  changeDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handleDeleteJob = (id) => {
    this.props.deleteJobPost(id);
  }

  getTodaysDate = () => {
    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    let today = new Date(usaTime);

    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy;
  }

  getTimeStampId = () => {
    let today = new Date();
    return today.getTime();
  }

  handleAddNewJob = (id, link = '') => {
    this.resetState();

    const today = this.getTodaysDate();
    const jobId = this.getTimeStampId();

    this.setState({
      addingNewJob: true,
      addingNewJobSDId: id,
      jobEditId: jobId,
      jobId,
      jobName: '',
      jobUrl: link,
      date: today,
    })
  }

  handleSaveJob = async (schoolId) => {
    const { jobEditId, jobName, jobUrl, date } = this.state;
    const jobInfo = {
      jobId: jobEditId,
      jobTitle: jobName,
      schoolId,
      jobUrl,
      date,
    }
    await this.props.saveJobPost(jobInfo);
    this.resetState();
  }

  handleSaveSD = () => {
    const { editingSDUrlId, sdUrl } = this.state;
    //save action
    const id = parseInt(editingSDUrlId);
    this.props.saveSDUrl(editingSDUrlId, sdUrl);
    this.resetState();
  }

  resetState = () => {
    this.setState({
      addingNewJob: false,
      addingNewJobSDId: null,
      editingSDUrlId: null,
      editingSDUrl: false,
      sdUrl: '',
      jobEditId: null,
      jobName: '',
      jobUrl: '',
      date: '',
    })
  }

  generateEmail = jobs => {
    const emailTemplate = generateEmail(jobs);
    this.setState({
      emailTemplate,
    })
  }

  handleUpdateDates = id => {
    this.props.updateJobDates(id);
  }

  render() {
    const jobs = this.props.jobs || [];
    const schools = this.props.schools || [];
    const auth = this.props.auth || { admin: false };
    return (
      auth.admin &&
      <div className='job-control-panel'>
        {schools.map((schoolDistrict) => (
          <div className='job-control-panel_school-district' key={schoolDistrict.sd}>
            <h3>#{schoolDistrict.id} {schoolDistrict.sd}</h3>
            {this.state.editingSDUrlId === schoolDistrict.id
              ?
              <div className='job-control-panel_school-district-link'>
                <input className='job-control-panel__text-input' type="text" name="name" onChange={this.changeSDUrl} value={this.state.sdUrl} />
                <button className='myButton' onClick={this.handleSaveSD}>Save</button>
                <button className='myButton' onClick={this.resetState}>Cancel</button>
              </div>
              :
              <div className='job-control-panel_school-district-link'>
                <a href={schoolDistrict.link} target='_blank'>{schoolDistrict.link}</a> <button className='myButton' onClick={() => this.handleEditSDUrl(schoolDistrict.id, schoolDistrict.link)}>Edit</button>
              </div>
            }

            <h4>Jobs
              <button className='myButton' onClick={() => this.handleAddNewJob(schoolDistrict.id, schoolDistrict.link)} >Add New Job</button>
              <button className='myButton' onClick={() => this.handleUpdateDates(schoolDistrict.id)} >Update All Dates</button></h4>
            {schoolDistrict.id === this.state.addingNewJobSDId && (
              <div className='job-control-panel_single-job'>
                <div>Job:
                <input className='job-control-panel__text-input' type="text" name="name" value={this.state.jobName} onChange={this.changeJobName} />
                  <button className='myButton' onClick={() => this.handleSaveJob(schoolDistrict.id)}>Save</button>
                  <button className='myButton' onClick={this.resetState}>Cancel</button>
                </div>
                <div>Url: <input className='job-control-panel__text-input' type="text" name="name" onChange={this.changeJobUrl} value={this.state.jobUrl} /> </div>
                <div>Date: <input className='job-control-panel__text-input' type="text" name="name" onChange={this.changeDate} value={this.state.date} /> </div>
              </div>
            )}
            {jobs
              .filter(job => job.schoolId == schoolDistrict.id)
              .map(job => job.jobId == this.state.jobEditId
                ?
                <div className='job-control-panel_single-job' key={job.jobId}>
                  <div>Job:
                    <input className='job-control-panel__text-input' type="text" name="name" value={this.state.jobName} onChange={this.changeJobName} />
                    <button className='myButton' onClick={() => this.handleSaveJob(schoolDistrict.id)}>Save</button>
                    <button className='myButton' onClick={this.resetState}>Cancel</button>
                  </div>
                  <div>Url: <input className='job-control-panel__text-input' type="text" name="name" onChange={this.changeJobUrl} value={this.state.jobUrl} /> </div>
                  <div>Date: <input className='job-control-panel__text-input' type="text" name="name" onChange={this.changeDate} value={this.state.date} /> </div>
                </div>
                :
                <div className='job-control-panel_single-job' key={job.jobId}>
                  <div>Job: {job.jobTitle}
                    <button className='myButton' onClick={() => this.handleEditJob(job.jobId, job.jobTitle, job.jobUrl, job.date, schoolDistrict.link)}>Edit</button>
                    <button className='myButton' onClick={() => this.handleDeleteJob(job.jobId)}>Delete</button></div>
                  <div>Url: {job.jobUrl} </div>
                  <div>Date: {job.date} </div>
                </div>
              )
            }

          </div>
        ))

        }
        <div>
          <div>
            <button onClick={() => this.generateEmail(jobs)}>Generate HTML Email</button>
          </div>

          <div>
            <textarea value={this.state.emailTemplate} />
          </div>
        </div>
      </div > || <h2><br />You do not have permission to access this page.<br /></h2>

    )
  }
}

function mapStateToProps(state) {
  const { jobs, schools, auth } = state;
  if (jobs && schools && auth) {
    return {
      jobs: getJobsSortedById(state),
      schools,
      auth
    };
  } else {
    return {};
  }
}

export default connect(mapStateToProps, actions)(AdminJobControlPanel);
