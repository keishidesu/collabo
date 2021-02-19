import { Nav } from 'react-bootstrap';

export default function Footer() {
  return (
  <div style={footer} className="d-none d-md-block">
    <hr />
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" style={{color:'black'}}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard" style={{color:'black'}}>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/task" style={{color:'black'}}>Task List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/schedule"  style={{color:'black'}}>Schedule</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/message"  style={{color:'black'}}>Message</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/documents" style={{color:'black'}}>Documents</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
  );
}

const footer = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '100%',
  textAlign: 'center',
}
