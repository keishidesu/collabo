import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container, Card } from 'react-bootstrap';
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