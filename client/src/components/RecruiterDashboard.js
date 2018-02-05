import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from './RightSidebar';
import getTodaysDate from '../utils/getTodaysDate';
import CheckBoxes from './SubmitResumeCheckBoxes';

class RecruiterDashboard extends Component {
  constructor() {
    super();
    this.state = { filterText: '' };
    this.handleFilterText = this.handleFilterText.bind(this);
  }

  handleFilterText(e) {
    this.setState({ filterText: e.target.value });
  }

  renderTable(leads = []) {
    //filter using text input
    console.log(leads);
  }

  render() {
    let today = getTodaysDate();
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
                <h2>Your Dashboard {today}</h2>
              </center>
              <CheckBoxes />
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
                <tbody>{this.renderTable(this.props.leads)}</tbody>
              </table>
            </div>

            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ leads }) {
  if (leads) {
    return { leads };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(RecruiterDashboard);
