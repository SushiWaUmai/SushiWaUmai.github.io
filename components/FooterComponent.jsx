import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Github, Twitter, Instagram } from "react-bootstrap-icons";

export default function FooterComponent() {
  return (
    <footer className="bg-dark">
      <Container>
        <Row className="p-2">
          <Col>
            <div className="d-flex justify-content-center">
              <a className="m-2" href="https://github.com/SushiWaUmai">
                <Github color="white" size={32} />
              </a>
              <a className="m-2" href="https://twitter.com/EugeneMatsumur1">
                <Twitter color="white" size={32} />
              </a>
              <a
                className="m-2"
                href="https://www.instagram.com/eugenematsumura/"
              >
                <Instagram color="white" size={32} />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center m-2 p-2">
              <Button variant="light" onClick={() => window.scrollTo(0, 0)}>
                Back to Top
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
