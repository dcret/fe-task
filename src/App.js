import logo from './logo.svg';
import './App.css';
import CustomForm from './components/CustomForm';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <CustomForm />
        </Col>
      </Row>
    </Container>);
}

export default App;
