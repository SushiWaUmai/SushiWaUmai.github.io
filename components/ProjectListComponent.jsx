import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function ProjectListComponent() {
  return (
    <div>
      <Row className="text-center">
        <Col>
          <h3>Projects</h3>
        </Col>
      </Row>
      <Container fluid>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card className="m-2">
              <a
                className="btn btn-white"
                role="button"
                href="../pixaethetics/"
              >
                <div className="p-2">
                  <Card.Img
                    width={315}
                    variant="top"
                    src="/pixaesthetics.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title>
                    <h4>Pixaethetics</h4>
                    <hr />
                  </Card.Title>
                  <Card.Text>Create pixelart from real life images!</Card.Text>
                </Card.Body>
              </a>
            </Card>
          </Col>
        </Row>
      </Container>

      <hr />

      <div className="bg-dark text-light rounded p-2">
        <Row className="text-center">
          <Col>
            <h3>Games</h3>
          </Col>
        </Row>
        <Container fluid>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Card className="m-2">
                <a
                  className="btn btn-white"
                  role="button"
                  href="https://sushiwaumai.itch.io/slimy-situation"
                >
                  <div className="p-2">
                    <Card.Img
                      variant="top"
                      src="https://img.itch.zone/aW1nLzUyNzQ0NjMucG5n/315x250%23c/1SOdnP.png"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h4>Slimy Situation</h4>
                      <hr />
                    </Card.Title>
                    <Card.Text>Slimy Cave Escape Adventure</Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </Col>
            <Col>
              <Card className="m-2">
                <a
                  className="btn btn-white"
                  role="button"
                  href="https://sushiwaumai.itch.io/teacher-simulator"
                >
                  <div className="p-2">
                    <Card.Img
                      variant="top"
                      src="https://img.itch.zone/aW1nLzM4MzkxMTAucG5n/315x250%23c/LZTaRp.png"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h4>Teacher Simulator</h4>
                      <hr />
                    </Card.Title>
                    <Card.Text>
                      The students are running around starting fires and
                      throwing grenades... stop them!
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </Col>
            <Col>
              <Card className="m-2">
                <a
                  className="btn btn-white"
                  role="button"
                  href="https://sushiwaumai.itch.io/the-milkhemist"
                >
                  <div className="p-2">
                    <Card.Img
                      variant="top"
                      src="https://img.itch.zone/aW1nLzU0MzI3NjIucG5n/315x250%23c/dUwFhY.png"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h4>The Milkhemist</h4>
                      <hr />
                    </Card.Title>
                    <Card.Text>(Milk) Zombies Approach!</Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row className="text-center">
          <Col>
            <a
              className="btn btn-light"
              role="button"
              href="https://sushiwaumai.itch.io/"
            >
              Itch Page
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
