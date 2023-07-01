
import React from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { useDispatch, useSelector } from "react-redux";
import { logout, userData } from "../../pages/userSlice";
import { FunctionButton } from "../FunctionButton/FunctionButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const datos = useSelector(userData)
  const token = datos?.credentials?.token?.data?.token;
  const role = datos?.data?.roleId;



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
            <Nav.Link href="/nosotros" className="me-4">Nosotros</Nav.Link>
            <Nav.Link href="/" className="me-4">Tratamientos</Nav.Link>

            {token
              ? (
                <>
                  {role === 1
                    ? (
                      // patient
                      <Nav.Link href="/pedircita" className="me-4">Pedir cita</Nav.Link>
                    )
                    : role === 2
                      ? (
                        // dentist
                        <>
                          <Nav.Link href="/citas/all" className="me-4">Citas Clinica</Nav.Link>
                          <Nav.Link href="/citas/dentista" className="me-4">Mis citas </Nav.Link>
                        </>
                      )
                      : (
                        // admin
                        <>
                          <Nav.Link href="/usuario/all" className="me-4">Usuarios</Nav.Link>
                          <Nav.Link href="/citas/all" className="me-4">Citas Clinica</Nav.Link>
                          <Nav.Link href="/pedircita" className="me-4">Pedir cita</Nav.Link>
                        </>
                      )
                  }

                  <Nav.Link href="/usuario" className="me-4">Mi perfil</Nav.Link>
                  <FunctionButton name="Logout" action={() => { dispatch(logout()); navigate('/') }} />
                </>
              )
              : (<NavigateButton name="Inicia sesión" path="/login" />)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
