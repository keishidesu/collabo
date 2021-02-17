import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { NavBar } from './NavBar';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import task from '../assets/task.png';
import schedule from '../assets/schedule.png';
import message from '../assets/message.png';
import document from '../assets/document.png';

export default class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      navs: [
        {
          title: 'My Task',
          image: task,
          link: '/task',
        },
        {
          title: 'My Schedule',
          image: schedule,
          link: '/schedule'
        },
        {
          title: 'My Messages',
          image: message,
          link: '/message'
        },
        {
          title: 'My Documents',
          image: document,
          link: '/documents'
        }
      ]
    }
  }

  render() {
    const cards = []
    for (const [index, value] of this.state.navs.entries()) {
      console.log(value)
      cards.push(
        <Col xs={12} md={3} key={index}>
          <Link to={value.link} className="text-decoration-none">
            <Card className="p-3" style={glassCard}>
              <Card.Img className="d-none d-md-block" align="center" as={Image} src={value.image} fluid/>
                <Card.Title className="text-center">
                  {value.title}
                </Card.Title>
            </Card>
          </Link>
        </Col>
      );
    }
    return (
      <div>
        <NavBar />
        <Container>
          <Row className="mt-4 align-items-center">
            <Col xs={3}>
              <img src={profile} width="70%"/>
            </Col>
            <Col>
              <pre>
                <p><b>Name  :</b> Andrew Otto</p>
                <p><b>Email :</b> andrew@gmail.com</p>
                <p><b>Role  :</b> Employee</p>
              </pre>
              <Button variant="dark">
                Update
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            {cards}
          </Row>
        </Container>
      </div>
    );
  }
}

const glassCard = {
  borderRadius:'35px',
  backgroundColor:'rgba(247, 247, 247, 0.5)',
  backdropFilter: 'blur(6px)',
  borderColor: 'transparent'
}