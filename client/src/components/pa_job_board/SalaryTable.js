import React, { Component } from 'react';

export default class SalaryTable extends Component {
  state = {
    byDistrict: [],
    byDistrictReverse: [],
    byMaxSalary: [],
    byMaxSalaryRev: [],
    byMinSalary: [],
    byMinSalaryRev: [],
  }

  componentDidMount = () => {
    const { salaries } = this.props;
    const byDistrictReverse = salaries.slice().reverse();
    const byMaxSalary = this.intsToSalaryStrings(this.convertSalaryStringsToInts(salaries).sort((a, b) => b['MAX SALARY'] - a['MAX SALARY']));
    const byMinSalary = this.intsToSalaryStrings(this.convertSalaryStringsToInts(salaries).sort((a, b) => b['MIN SALARY'] - a['MIN SALARY']));
    const byMaxSalaryRev = byMaxSalary.slice().reverse();
    const byMinSalaryRev = byMinSalary.slice().reverse();

    this.setState({
      byDistrict: salaries,
      byDistrictReverse,
      byMaxSalary,
      byMaxSalaryRev,
      byMinSalary,
      byMinSalaryRev,
    })
  }

  convertSalaryStringsToInts = salaries => {
    return salaries.map(district => {
      district['MAX SALARY'] = parseInt(district['MAX SALARY'].replace(/[$,]/g, ''))
      district['MIN SALARY'] = parseInt(district['MIN SALARY'].replace(/[$,]/g, ''))
      return district;
    })
  }

  intsToSalaryStrings = salaries => {
    return salaries.map(district => {
      district['MAX SALARY'] = '$' + district['MAX SALARY'].toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      district['MIN SALARY'] = '$' + district['MIN SALARY'].toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      return district;
    })
  }

  render() {
    const {
      byDistrict,
      byDistrictReverse,
      byMaxSalary,
      byMaxSalaryRev,
      byMinSalary,
      byMinSalaryRev
    } = this.state;

    const salaries = byDistrict;
    return (
      <table className="table table-bordered table-striped table-hover">
        <thead>

          <tr>
            <td>
              <div className='row'>
                <div className="table-header col-xs-5"
                // onClick={() => this.setState({ sortByJob: true })}
                >School District
                {/* <i className="fas fa-caret-down"></i> */}
                </div>
                <div className="table-header col-xs-3"
                // onClick={() => this.setState({ sortByLocation: true })}
                >Min Salary
                {/* <i className="fas fa-caret-down"></i> */}
                </div>
                <div className="table-header col-xs-4"
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
                    <div className="col-xs-5">
                      {school.DISTRICT}
                      <br />
                    </div>
                    <div className="col-xs-3">
                      {school['MIN SALARY']} <br />
                    </div>
                    <div className="col-xs-4">{school['MAX SALARY']}</div>
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