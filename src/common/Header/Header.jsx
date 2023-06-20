
import React from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CustomButton } from '../../common/CustomButton/CustomButton';

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="headerDesign">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="src\assets\img\logo.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Clinica dental logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/" className="me-4">Home</Nav.Link>
            <Nav.Link href="/" className="me-4">Nosotros</Nav.Link>
            <Nav.Link href="/" className="me-4">Tratamientos</Nav.Link>
            <Nav.Link href="/" className="me-4">Consulta</Nav.Link>
            <CustomButton name="Inicia sesión" path="/login" />
            <Nav.Link href="/register" className="me-4">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
