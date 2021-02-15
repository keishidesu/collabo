import React from 'react';
import { Card, Row, Container, Col, CardColumns, } from 'react-bootstrap';
import { NavBar } from './NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col  md={12} lg={6} className="mx-auto">
            <h2 className="text-center mt-3 bold">
              Welcome back Andrew!
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col sm={12} md={8}>
            <CardColumns>
              <Card>
                <Card.Body>
                  <Card.Title>Need to be done</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Due next week
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Things to do-1</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Due in 3 days
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Things to be done 2</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </Col>
        </Row>
        <hr />
        <Row className="mt-4 mb-4">
          <Col>
            <a style={navlist} href="/">Dashboard</a>
          </Col>
          <Col>
            <a style={navlist} href="/">Task List</a>
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
      </Container>
    </div>
  );
}

const navlist = {
  display: 'inline',
  color: 'black'
}