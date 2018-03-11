import React, { Component } from 'react';

class Articles extends Component {
  render() {
    return (
      <div className="content-container container ">
        <img src="../../img/mountain-background.jpeg" alt="bg" className="bg" />
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <h1>Articles</h1>
            <ul>
              <li><a href="#">Link1</a></li>
              <li><a href="#">Link2</a></li>
              <li><a href="#">Link3</a></li>
              <li><a href="#">Link4</a></li>
              <li><a href="#">Link5</a></li>
              <li><a href="#">Link6</a></li>
            </ul>
          </div>
          <RightSidebar />
        </div>
      </div>
    );
  }
}

export default Articles;
