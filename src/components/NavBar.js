import React from 'react';
import { Nav, NavDropdown, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import logo from './Collabo.png'

export const NavBar = () => {
  return (
    <Navbar style={{'background': 'rgba(255, 255, 255, 0.7)'}} expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Collabo"
          />{' '}
          Collabo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <OverlayTrigger placement="bottom" overlay={<Tooltip id="signout">Signout?</Tooltip>}>
          <Navbar.Text>
            Signed in as: <a href="/">Andrew Otto</a>
          </Navbar.Text>
        </OverlayTrigger>
        <Nav className="mr-auto">
          <NavDropdown.Item href="/home">Home</NavDropdown.Item>
          <NavDropdown.Item href="/dashboard">DashBoard</NavDropdown.Item>
          <NavDropdown.Item href="/task">Task List</NavDropdown.Item>
          <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
          <NavDropdown.Item href="/message">Message</NavDropdown.Item>
          <NavDropdown.Item href="/documents">Documents</NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}