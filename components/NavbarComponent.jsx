import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
        <Navbar.Brand className="m-2" href="/">
          SushiWaUmai
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
