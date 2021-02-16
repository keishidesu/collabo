import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Card, Tabs, Tab, Accordion } from 'react-bootstrap';
import { NavBar } from './NavBar';
import Footer from './footer';

export default class Schedule extends React.Component {
  handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Card style={glassCard} className="p-3 mt-4">
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={[
                { title: 'event 1', date: '2021-02-10' },
                { title: 'event 2', date: '2021-02-12' },
                { title: 'task due', date: '2021-02-28' }
              ]}
            />
          </Card>
          <br />
          <Tabs defaultActiveKey="upcoming" id="event-tab">
            <Tab eventKey="upcoming" title="Upcoming Event">
              <Accordion defaultActiveKey="0" className="mt-2">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Task Due
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                  <Card.Body>
                      <small>2021-02-28</small>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.<br/> <br/>
                      Vestibulum consequat efficitur augue, id laoreet mauris semper vitae. Phasellus maximus ante tristique dui consequat, non ullamcorper enim tincidunt. Nam nibh justo, tempus laoreet congue eget, viverra a est. Sed vitae felis ipsum. Donec finibus pretium sem nec hendrerit. Morbi nunc odio, interdum sit amet justo vitae, pellentesque fringilla lacus. In mattis faucibus nulla, quis sodales ex euismod nec. Donec quam massa, posuere laoreet finibus vitae, volutpat posuere risus. Proin lobortis lobortis velit at congue.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab>
            <Tab eventKey="past" title="Past Event">
            <Accordion defaultActiveKey="0" className="mt-2">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Event 1
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <small>2021-02-10</small>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.<br/> <br/>
                      Vestibulum consequat efficitur augue, id laoreet mauris semper vitae. Phasellus maximus ante tristique dui consequat, non ullamcorper enim tincidunt. Nam nibh justo, tempus laoreet congue eget, viverra a est. Sed vitae felis ipsum. Donec finibus pretium sem nec hendrerit. Morbi nunc odio, interdum sit amet justo vitae, pellentesque fringilla lacus. In mattis faucibus nulla, quis sodales ex euismod nec. Donec quam massa, posuere laoreet finibus vitae, volutpat posuere risus. Proin lobortis lobortis velit at congue.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Event 2
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                  <Card.Body>
                      <small>2021-02-12</small>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non neque at magna posuere lobortis. Nam aliquam massa sem, a egestas arcu tincidunt vitae. Fusce a purus ac ex fringilla pellentesque. Nunc gravida urna sed odio feugiat, non auctor risus scelerisque. Praesent semper sem quis magna semper porta nec sed magna. Integer non ligula ac nisl dignissim sagittis. In pulvinar, ipsum vel imperdiet placerat, tortor erat euismod risus, nec bibendum augue eros et turpis. Aliquam suscipit, odio non vehicula faucibus, leo lectus mollis neque, eget elementum tellus nunc id diam. Nam eget ipsum accumsan, vehicula leo at, bibendum lorem. Nullam consectetur eros et placerat feugiat.<br/> <br/>
                      Vestibulum consequat efficitur augue, id laoreet mauris semper vitae. Phasellus maximus ante tristique dui consequat, non ullamcorper enim tincidunt. Nam nibh justo, tempus laoreet congue eget, viverra a est. Sed vitae felis ipsum. Donec finibus pretium sem nec hendrerit. Morbi nunc odio, interdum sit amet justo vitae, pellentesque fringilla lacus. In mattis faucibus nulla, quis sodales ex euismod nec. Donec quam massa, posuere laoreet finibus vitae, volutpat posuere risus. Proin lobortis lobortis velit at congue.</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Tab>
          </Tabs>
          <Footer />
        </Container>
      </div>    
    )
  }
}

const glassCard = {
  backgroundColor:'rgba(247, 247, 247, 0.5)',
  backdropFilter: 'blur(6px)',
  borderColor: 'transparent'
}