import "./App.css";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Matrix from "./Matrix";
import { Button } from "react-bootstrap";
function App() {
  const [color, setColor] = useState([
    0, 0, 0, 0, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  ]);

  return (
    <div>
      <Container className="container-main">
        <Row>
          <Col md={6} className="container1">
            <Matrix m={8} n={6} color={color} />
          </Col>
          <Col md={5} className="container2">
            <Container>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary">Move Up</Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary">Move Down</Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary">Move Left</Button>
                </div>
              </Row>
              <Row className="row-margin">
                <div className="button-med">
                  <Button variant="primary">Move Right</Button>
                </div>
              </Row>
              <Row className="row-margin-bot">
                <div className="button-med">
                  <Button variant="success">Run</Button>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
