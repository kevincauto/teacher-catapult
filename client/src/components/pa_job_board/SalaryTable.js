import React, { Component } from 'react';

export default class SalaryTable extends Component {
  render() {
    const { salaries } = this.props;
    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>

          <tr>
            <td>
              <div className='row'>
                <div className="table-header-salary col-xs-6"
                // onClick={() => this.setState({ sortByJob: true })}
                >School District
                {/* <i className="fas fa-caret-down"></i> */}
                </div>
                <div className="table-header-salary col-xs-3"
                // onClick={() => this.setState({ sortByLocation: true })}
                >Min Salary
                {/* <i className="fas fa-caret-down"></i> */}
                </div>
                <div className="table-header-salary col-xs-3"
                // onClick={() => this.setState({ sortByDate: true })}
                >Max Salary
                {/* <i className="fas fa-caret-down"></i> */}
                </div>
              </div>
            </td>
          </tr>

        </thead>
        <tbody>
          {salaries.map((school) => {
            return (
              <tr key={school.DISTRICT}>
                <td>
                  <div className="row">
                    <div className="col-xs-6">
                      {school.DISTRICT}
                      <br />
                    </div>
                    <div className="col-xs-3">
                      {school['MIN SALARY']} <br />
                    </div>
                    <div className="col-xs-3">{school['MAX SALARY']}</div>
                  </div>
                </td>
              </tr>

            )
          })
          }
        </tbody>
      </table>
    )
  }
}