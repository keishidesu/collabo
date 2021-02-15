import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <hr />
      <Row className="mt-4 mb-4">
        <Col>
          <a style={navlist} href="/">Dashboard</a>
        </Col>
        <Col>
          <a style={navlist} href="/task">Task List</a>
        </Col>
        <Col>
          <a style={navlist} href="/">Schedule</a>
        </Col>
        <Col>
          <a style={navlist} href="/">Message</a>
        </Col> 
        <Col>
        <a style={navlist} href="/">Documents</a>
        </Col>
      </Row>
    </div>
  );
}

const navlist = {
  display: 'inline',
  color: 'black'
}