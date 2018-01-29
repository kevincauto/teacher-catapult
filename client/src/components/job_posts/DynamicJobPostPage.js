import React, { Component } from 'react';
import { connect } from 'react-redux';
import RightSidebar from '../RightSidebar';

class DynamicJobPostPage extends Component {
  render;

  render() {
    let display = <h2>Job Not Found.</h2>;
    const { match } = this.props;
    let slug = match.params.id;
    if (this.props.paidjobs) {
      let result = this.props.paidjobs.filter(
        ({ link }) => (link === `/jobs/${slug}` ? true : false)
      );
      let { jobTitle, sd, city, state, county, description, date } = result[0];
      console.log(result);

      display = (
        <div>
          <h1>{jobTitle}</h1>
          <div className="well">
            <h4>
              <strong>Date:</strong> {date}
            </h4>
            <h4>
              <strong>School District/Company:</strong> {sd}
            </h4>
            <h4>
              <strong>City:</strong> {city}, {state}
            </h4>

            <h4>
              <strong>County:</strong> {county}
            </h4>
            <h4>
              <strong>Description:</strong>{' '}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <img src="http://placehold.it/468x60/eee" alt="half masthead ad" />
        <br />
        <br />
        <div className="content-container container">
          {/* <img src="http://teachercatapult.com/wp-content/themes/jobroller/images/background.jpg" alt="bg" className="bg" />  */}

          <div className="row">
            <div className="col-md-8 col-lg-9">{display}</div>
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ paidjobs }) {
  if (paidjobs) {
    return { paidjobs };
  } else {
    return {};
  }
}

export default connect(mapStateToProps)(DynamicJobPostPage);
