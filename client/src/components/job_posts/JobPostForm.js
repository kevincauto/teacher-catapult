import React, { Component } from 'react';

class JobPostForm extends Component {
  constructor() {
    super();

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props.data);
  }
  handleClickNext() {
    this.props.onClickNext();
  }

  handleFieldChange(value, field) {
    this.props.onFieldChange(value, field);
  }

  renderForm() {
    return (
      <div className="well well-lg">
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">
            <span
              className="glyphicon glyphicon-briefcase"
              aria-hidden="true"
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Job Title"
            aria-describedby="sizing-addon1"
            name={'jobTitle'}
            value={this.props.data[this.name]}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-apple" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="School District"
            aria-describedby="sizing-addon1"
            name={'sd'}
            value={this.props.data[this.name]}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-describedby="sizing-addon1"
            name={'city'}
            value={this.props.data[this.name]}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="State"
            aria-describedby="sizing-addon1"
            name={'state'}
            value={this.props.data[this.name]}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="County"
            aria-describedby="sizing-addon1"
            name={'county'}
            value={this.props.data[this.name]}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={() => this.handleClickNext()}
        >
          Next{' '}
          <span
            className="glyphicon glyphicon-arrow-right"
            aria-hidden="true"
          />
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-8 col-lg-9">
        <h1>Please Complete the Form.</h1>
        {this.renderForm()}
      </div>
    );
  }
}

export default JobPostForm;
