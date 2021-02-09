import { Container } from 'react-bootstrap';
import Auth from './components/Auth'

function App() {
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
        <Auth />
      </Container>
    </div>
  );
}

export default App;
