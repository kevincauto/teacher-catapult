import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li className="nav-item"><a className="nav-link" href="/auth/google">Login With Google</a></li>;
      default:
        return <li className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></li>;
    }
  }
 
  render() {
    return (
        
      <nav className="navbar navbar-dark bg-dark">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="navbar-brand"
          >
            <img style={{ height: '46px'}} src="http://teachercatapult.com/wp-content/uploads/2015/11/Teacher-Catapult-Logo-Gray-Yellow.png" alt="Teacher Catapult" />
          </Link>

          <ul className="navbar-nav">
            {this.renderContent()}
          </ul>        
          
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);