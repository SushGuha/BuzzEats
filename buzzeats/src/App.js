import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicExample from "./BasicExample";

import Restaurant from "./Restaurant";


function App() {
  return (
    <div>
      <BasicExample />
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Restaurant />
    </div>
  );
}

export default App;
