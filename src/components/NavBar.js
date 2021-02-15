import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './Collabo.png'

export const NavBar = () => {
  return (
    <Navbar style={{'background': 'rgba(255, 255, 255, 0.7)'}}>
      <Navbar.Brand href="/home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Collabo"
        />{' '}
        Collabo
      </Navbar.Brand>
    </Navbar>
  );
}