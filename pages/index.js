import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import ProjectListComponent from "../components/ProjectListComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | SushiWaUmai</title>
        <meta name="keywords" content="games, itch, coding, programming" />
        <meta
          name="description"
          content="Homepage of Eugene Matsumura/SushiWaUmai."
        />
      </Head>

      <Container className="bg-light p-5">
        <Row>
          <Col>
            <div>
              <h1>SushiWaUmai</h1>
              <h5 className="text-muted">Eugene Matsumura</h5>
            </div>
          </Col>
          <Col md="auto">
            <Image
              width={128}
              height={128}
              src="/../public/Sushi.png"
              alt="Sushi"
              className="rounded"
            />
          </Col>
        </Row>
        <hr />
        <ProjectListComponent />
      </Container>
    </div>
  );
}
