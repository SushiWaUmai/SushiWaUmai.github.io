import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Portfolio | SushiWaUmai</title>
        <meta name="keywords" content="gamedev, programming, code" />
        <meta name="description" content="Website about Eugene Matsumura" />
      </Head>
      <Container className="bg-light p-5">
        <Row>
          <Col>
            <div className="text-center">
              <h1>About me</h1>
              <hr />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <Image
              width={256}
              height={256}
              src="/Sushi.png"
              alt="Sushi"
              className="rounded"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
