import React, { Component } from 'react';

class JobPostForm extends Component {
  render() {
    return (
      <div className="col-md-8 col-lg-9">
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
            />
          </div>
          <button className="btn btn-primary">
            Next{' '}
            <span
              className="glyphicon glyphicon-arrow-right"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default JobPostForm;
