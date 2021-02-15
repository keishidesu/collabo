import { Image, Row, Col, Card, Button, Form } from "react-bootstrap"
import collaboLogo from './Collabo.png'
import { Container } from 'react-bootstrap';

const Auth = () => {
  return (
    <div>
      <style type="text/css">
        {`
        .btn-teal {
          background-color: #00C2CB;
          color: white;
        }
        `}
      </style>
      <Container>
        <div>
          <Row style={{justifyContent: 'center'}}>
            <Col lg={5} md={7} sm={12}>
              <Card style={glassCard} align="center" className="py-4">
                <Card.Body>
                  <Image src={collaboLogo} style={{width: '150px', alignSelf:'center'}}/>
                  <h3 className="text-dark my-4">Welcome Back!</h3>
                  <Col lg={11}>
                    <Form className="pt-4">
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
        </div>
      </Container>
    </div>
  );
}

const glassCard = {
  marginTop: '200px',
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
