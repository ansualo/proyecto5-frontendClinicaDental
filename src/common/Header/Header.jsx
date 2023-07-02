
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
import logo from '../../assets/img/logo.png'

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
            src={logo}
            className="d-inline-block align-top logo"
            alt="Clinica dental logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/" className="me-2">Home</Nav.Link>
            <Nav.Link href="/nosotros" className="me-2">Nosotros</Nav.Link>
            <Nav.Link href="/tratamientos" className="me-2">Tratamientos</Nav.Link>

            {token
              ? (
                <>
                  {role === 1
                    ? (
                      // patient
                      <Nav.Link href="/pedircita" className="me-2">Pedir cita</Nav.Link>
                    )
                    : role === 2
                      ? (
                        // dentist
                        <>
                          <Nav.Link href="/citas/all" className="me-2">Citas Clinica</Nav.Link>
                          <Nav.Link href="/citas/dentista" className="me-2">Mis citas </Nav.Link>
                        </>
                      )
                      : (
                        // admin
                        <>
                          <Nav.Link href="/usuario/all" className="me-2">Pacientes</Nav.Link>
                          <Nav.Link href="/usuario/dentista" className="me-2">Dentistas</Nav.Link>
                          <Nav.Link href="/citas/all" className="me-2">Citas Clinica</Nav.Link>
                          <Nav.Link href="/pedircita" className="me-2">Pedir cita</Nav.Link>
                        </>
                      )
                  }

                  <Nav.Link href="/usuario" className="me-2">Mi perfil</Nav.Link>
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