import collaboLogo from './Collabo.png';
import React, { Component } from 'react';
import { Container, Image, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
  constructor () {
    super();
    this.state = {
      redirect: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      redirect: true
    });
  };

  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return <Redirect to="/home" />
    }
    return (
      <Container className="h-100">
        <style type="text/css">
          {`
          .btn-teal {
            background-color: #00C2CB;
            color: white;
          }
          `}
        </style>
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={5} md={7} sm={12} > 
            <Card style={glassCard} align="center" className="py-4">
              <Card.Body>
                <Image src={collaboLogo} style={{width: '150px', alignSelf:'center'}}/>
                <h3 className="text-dark my-4">Welcome Back!</h3>
                <Col lg={11}>
                  <Form className="pt-4" onSubmit={this.handleLogin}>
                    <Form.Group>
                      <Form.Control size="lg" type="email" placeholder="Enter email" style={glassForm} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control size="lg" type="password" placeholder="Password" style={glassForm} />
                    </Form.Group>
                    <Button variant="teal" size="lg" type="submit" className="mt-3" style={{borderRadius:'15px'}}>Submit</Button>
                  </Form>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const glassCard = {
  borderRadius:'35px',
  backgroundColor:'rgba(247, 247, 247, 0.5)',
  backdropFilter: 'blur(6px)',
  borderColor: 'transparent'
}

const glassForm = {
  borderRadius:'15px',
  backgroundColor:'rgba(247, 247, 247, 0.5)',
  backdropFilter: 'blur(6px)',
  borderColor: 'transparent'
}

export default Auth
