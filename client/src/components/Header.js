import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Button, Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li className="nav-item"><a className="nav-link" href="/auth/google">Login With Google</a></li>;
      default:
        return [
        <NavItem eventKey={1} href="#">
          <Payments>Post a Jobs</Payments>
        </NavItem>,
        
        <NavItem eventKey={2}>
          
          Job Posts Left: {this.props.auth.credits}
          </NavItem>,
        <NavItem eventKey={3}>
          <Link to={this.props.auth ? '/surveys' : '/'}>Dashboard</Link>       
        </NavItem>,
        <NavItem eventKey={4} href="/api/logout">
          Logout</NavItem>
      ];
    }
  }
 
  render() {
    return (
 

<Navbar inverse collapseOnSelect staticTop>
<Navbar.Header>
  <Navbar.Brand>
  <Link
           to={'/'}
            >
            <img style={{ height: '22px'}} src="http://teachercatapult.com/wp-content/uploads/2015/11/Teacher-Catapult-Logo-Gray-Yellow.png" alt="Teacher Catapult" />
          </Link>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav>
    {/* <NavItem eventKey={2} href="#">
      Link
    </NavItem> */}
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
  <Nav pullRight>
    {this.renderContent()}
  </Nav>
</Navbar.Collapse>
</Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);