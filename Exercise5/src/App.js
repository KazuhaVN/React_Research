import React, { useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import Button from "react-bootstrap/Button";
import axios from "axios";
function App() {
  const [position1, setPosition1] = useState([20, 105]);
  const [position2, setPosition2] = useState([20, 105]);
  const [address1, setAddress1] = useState(null);
  const [address2, setAddress2] = useState(null);
  const [choosenumber, setChoosenumber] = useState(1);
  const [routeEvents, setRouteEvents] = useState([]);
  async function handleRouting() {
    const apiKey = "5b3ce3597851110001cf6248150904fd717c43b0915b9a7dbe1796eb";
    const start = `${position1.lng},${position1.lat}`;
    const end = `${position2.lng},${position2.lat}`;

    // Make a request to the OpenRouteService API
    const response = await axios.get(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start}&end=${end}`
    );

    // Extract the route events from the response
    const routeSteps = response.data.features[0].properties.segments[0].steps;

    // Update the state with the route events
    setRouteEvents(routeSteps);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md>
            <Container>
              <Row className="my-row1">
                <Col md={3}>
                  <Button variant="primary" onClick={() => setChoosenumber(1)}>
                    Bắt đầu
                  </Button>
                </Col>
                <Col md={9}>
                  <div className="text-app">
                    Địa chỉ: {address1} <br />
                    Tọa độ: {position1.lat}, {position1.lng}
                  </div>
                </Col>
              </Row>
              <Row className="my-row2">
                <Col md={3}>
                  <Button variant="primary" onClick={() => setChoosenumber(2)}>
                    Kết thúc
                  </Button>
                </Col>
                <Col md={9}>
                  <div className="text-app">
                    Địa chỉ: {address2} <br />
                    Tọa độ: {position2.lat}, {position2.lng}
                  </div>
                </Col>
              </Row>
              <Row className="my-row2">
                <Button variant="primary" onClick={handleRouting}>
                  Routing
                </Button>
              </Row>
              <Row className="my-row2">
                {routeEvents.map((event, index) => (
                  <div key={index} className="text-app">
                    Event {index + 1}: {event.instruction}
                  </div>
                ))}
              </Row>
            </Container>
          </Col>

          <Col md>
            <MapContainer
              center={[20.43389, 106.17729]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="^11^">OpenStreetMap</a> contributors'
              />

              <LocationMarker
                position1={position1}
                setPosition1={setPosition1}
                position2={position2}
                setPosition2={setPosition2}
                setAddress1={setAddress1}
                setAddress2={setAddress2}
                choosenumber={choosenumber}
              />
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
