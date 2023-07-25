import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../assets/Logo.png'

const Navigationbar = () => {
  return (
    <Navbar bg="success" expand="lg" classname="shadow-5">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="nav-Links navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Populer</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
