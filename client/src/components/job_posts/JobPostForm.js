import React, { Component } from 'react';

// const FIELDS = [
//   { variable: 'jobTitle', placeholder: 'Job Title' },
//   { variable: 'sd', placeholder: 'School District' },
//   { variable: 'city', placeholder: 'City' },
//   { variable: 'state', placeholder: 'State' },
//   { variable: 'county', placeholder: 'County' },
//   { variable: 'description', placeholder: 'Description' },
//   { variable: 'contact', placeholder: 'Contact' }
// ];

class JobPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: props.data.jobTitle || '',
      sd: props.data.sd || '',
      city: props.data.city || '',
      state: props.data.state || '',
      county: props.data.county || '',
      description: props.data.description || ''
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidUpdate() {}
  handleClickNext() {
    this.props.onClickNext();
  }

  async handleFieldChange(value, field) {
    await this.props.onFieldChange(value, field);

    let { jobTitle, sd, city, state, county, description } = this.props.data;

    this.setState({
      jobTitle,
      sd,
      city,
      state,
      county,
      description
    });
  }

  renderForm() {
    let { jobTitle, sd, city, state, county, description } = this.state;

    return (
      <div className="well well-lg clearfix">
        <h2>Please complete the information below.</h2>
        <div className="input-group input-group-lg job-form">
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
            value={jobTitle}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-apple" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="School District"
            aria-describedby="sizing-addon1"
            name={'sd'}
            value={sd}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span
              className="glyphicon glyphicon-map-marker"
              aria-hidden="true"
            />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-describedby="sizing-addon1"
            name={'city'}
            value={city}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-globe" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="State"
            aria-describedby="sizing-addon1"
            name={'state'}
            value={state}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <div className="input-group input-group-lg job-form">
          <span className="input-group-addon" id="sizing-addon1">
            <span className="glyphicon glyphicon-pushpin" aria-hidden="true" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="County"
            aria-describedby="sizing-addon1"
            name={'county'}
            value={county}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>
        <h2>Job Info:</h2>
        <p>
          Be sure to include a job description, how to apply, and how applicants
          should contact you.
        </p>
        <div className="job-form">
          <textarea
            placeholder={'Job description...'}
            className="form-control input-group-lg job-form"
            rows="10"
            style={{ fontSize: '18px', whiteSpace: 'pre-wrap' }}
            name={'description'}
            value={this.state.description}
            onChange={e =>
              this.handleFieldChange(e.target.value, e.target.name)
            }
          />
        </div>

        <button
          className="btn btn-primary pull-right btn-lg"
          onClick={() => this.handleClickNext()}
          disabled={
            !(jobTitle && sd && city && state && description.length > 20)
          }
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
        <h1>Add a Job Post</h1>
        {this.renderForm()}
      </div>
    );
  }
}

export default JobPostForm;
