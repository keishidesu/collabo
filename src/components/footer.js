import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <hr />
      <Row className="mt-4 mb-4">
        <Col>
          <a style={navlist} href="/home">Home</a>
        </Col>
        <Col>
          <a style={navlist} href="/dashboard">Dashboard</a>
        </Col>
        <Col>
          <a style={navlist} href="/task">Task List</a>
        </Col>
        <Col>
          <a style={navlist} href="/schedule">Schedule</a>
        </Col>
        <Col>
          <a style={navlist} href="/message">Message</a>
        </Col> 
        <Col>
        <a style={navlist} href="/documents">Documents</a>
        </Col>
      </Row>
    </div>
  );
}

const navlist = {
  display: 'inline',
  color: 'black'
}