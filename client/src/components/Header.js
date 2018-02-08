import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          // <NavItem eventKey={1} key={1} href="#">
          //   <Payments>Payment</Payments>
          // </NavItem>,

          <NavItem eventKey={2} key={2}>
            Job Posts Left: {this.props.auth.credits}
          </NavItem>,
          <NavItem
            eventKey={3}
            key={3}
            href={this.props.auth ? '/recruiter/dashboard' : '/'}
          >
            Dashboard
          </NavItem>,

          <NavItem eventKey={4} key={4} href="/api/logout">
            Logout
          </NavItem>
        ];
    }
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              Teacher Catapult
              {/* <img style={{ height: '22px'}} src="http://teachercatapult.com/wp-content/uploads/2015/11/Teacher-Catapult-Logo-Gray-Yellow.png" alt="Teacher Catapult" /> */}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <NavItem eventKey={2} href="#">
      Link
    </NavItem> */}
            <NavDropdown eventKey={3} title="Resources" id="basic-nav-dropdown">
              <Navbar.Text>
                <Link to="/teaching-jobs-in-pa">Teaching Jobs in PA</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/teaching-articles/teacher-interview-questions/">
                  Interview Guide
                </Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/teaching-articles">Helpful Resources!</Link>
              </Navbar.Text>
              {/* <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
            </NavDropdown>
          </Nav>
          <Navbar.Text key={5}>
            <Link to="/job-post">Post a Job</Link>
          </Navbar.Text>
          <Nav pullRight>{this.renderContent()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
