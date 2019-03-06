import React, { Component } from 'react';
import { schoolDistricts } from '../data/school_district_data';
import './admin-job-control-panel.css';
import * as actions from '../../actions';
import { connect } from 'react-redux';

// const jobs = [{
//   schoolId: 0,
//   jobId: 1234,
//   jobTitle: 'English Teacher',
//   date: 'February 18, 2019',
//   jobUrl: 'https://google.com',
// }, {
//   schoolId: 0,
//   jobId: 1235,
//   jobTitle: 'Math Teacher',
//   date: 'February 18, 2019',
//   jobUrl: 'https://google.com',
// }];

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
  }

  componentDidUpdate = () => {
    // console.log(this.props.schools);
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
    console.log(this.state.sdUrl);
  };

  handleEditJob = (id, jobName, jobUrl, date) => {
    this.setState({
      addingNewJob: false,
      addingNewJobSDId: null,
      editingSDUrlId: null,
      editingSDUrl: false,
      jobEditId: id,
      jobName,
      jobUrl,
      date,
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

  handleAddNewJob = (id, link = '') => {
    this.resetState();
    console.log(id);
    let today = new Date();
    const jobId = today.getTime();

    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
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
    console.log('Save this job to the dataBase')
    const { jobEditId, jobName, jobUrl, date } = this.state;
    const jobInfo = {
      jobId: jobEditId,
      jobTitle: jobName,
      schoolId,
      jobUrl,
      date,
    }
    console.log(schoolId);
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

  render() {
    const jobs = this.props.jobs || [];
    const schools = this.props.schools || [];
    return (
      <div className='job-control-panel'>
        {schools.map((schoolDistrict) => (
          <div className='job-control-panel_school-district' key={schoolDistrict.sd}>
            <h3>#{schoolDistrict.id} {schoolDistrict.sd}</h3>
            {this.state.editingSDUrlId === schoolDistrict.id
              ?
              <div className='job-control-panel_school-district-link'>
                <input type="text" name="name" onChange={this.changeSDUrl} value={this.state.sdUrl} />
                <button className='myButton' onClick={this.handleSaveSD}>Save</button>
                <button className='myButton' onClick={this.resetState}>Cancel</button>
              </div>
              :
              <div className='job-control-panel_school-district-link'>
                <a href={schoolDistrict.link} target='_blank'>{schoolDistrict.link}</a> <button className='myButton' onClick={() => this.handleEditSDUrl(schoolDistrict.id, schoolDistrict.link)}>Edit</button>
              </div>
            }

            <h4>Jobs <button className='myButton' onClick={() => this.handleAddNewJob(schoolDistrict.id, schoolDistrict.link)} >Add New Job</button></h4>
            {schoolDistrict.id === this.state.addingNewJobSDId && (
              <div className='job-control-panel_single-job'>
                <div>Job:
                <input type="text" name="name" value={this.state.jobName} onChange={this.changeJobName} />
                  <button className='myButton' onClick={() => this.handleSaveJob(schoolDistrict.id)}>Save</button>
                  <button className='myButton' onClick={this.resetState}>Cancel</button>
                </div>
                <div>Url: <input type="text" name="name" onChange={this.changeJobUrl} value={this.state.jobUrl} /> </div>
                <div>Date: <input type="text" name="name" onChange={this.changeDate} value={this.state.date} /> </div>
              </div>
            )}
            {jobs
              .filter(job => job.schoolId == schoolDistrict.id)
              .map(job => job.jobId == this.state.jobEditId
                ?
                <div className='job-control-panel_single-job' key={job.jobId}>
                  <div>Job:
                    <input type="text" name="name" value={this.state.jobName} onChange={this.changeJobName} />
                    <button className='myButton' onClick={() => this.handleSaveJob(schoolDistrict.id)}>Save</button>
                    <button className='myButton' onClick={this.resetState}>Cancel</button>
                  </div>
                  <div>Url: <input type="text" name="name" onChange={this.changeJobUrl} value={this.state.jobUrl} /> </div>
                  <div>Date: <input type="text" name="name" onChange={this.changeDate} value={this.state.date} /> </div>
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
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { jobs, schools } = state;
  if (jobs && schools) {
    return { jobs, schools };
  } else {
    return {};
  }
}

export default connect(mapStateToProps, actions)(AdminJobControlPanel);
