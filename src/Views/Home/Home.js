import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./home.css";

function Home(props) {

  return (
    <div className="border p-3 m-2 rounded">
      <div className="welcome bg-light">
        <h1>Hello Dewald!</h1>
        <h3>What Would You Like To Do</h3>
      </div>
      <Container>
        <Row>
          <Col>
            {" "}
            <Nav.Link
              className="function bg-light"
              as={Link}
              to="/createClient"
            >
              Load New Client
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link
              className="function bg-light"
              as={Link}
              to="/createPolicy"
            >
              Load New Policy
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link className="function bg-light" as={Link} to="/">
              Log A New Claim
            </Nav.Link>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {" "}
            <Nav.Link
              className="function bg-light"
              as={Link}
              to="/createClient"
            >
              Load New Client
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link
              className="function bg-light"
              as={Link}
              to="/createPolicy"
            >
              Load New Policy
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link className="function bg-light" as={Link} to="/">
              Log A New Claim
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
