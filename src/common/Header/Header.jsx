import React from "react";
import './Header.css';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const calendarIcon = <FontAwesomeIcon icon={faCalendar} />
const clockIcon = <FontAwesomeIcon icon={faClock} />

export const Header = () => {

//     const navigate = useNavigate();

//     return (
//         <div class="headerDesign">
//             <div className="linkDesign" onClick={()=> navigate('/')}>HOME</div>
//             <div className="linkDesign" onClick={()=> navigate('/login')}>LOGIN</div>
//             <div className="linkDesign" onClick={()=> navigate('/register')}>REGISTER</div>
//         </div>
//     )
// }


  return (
    <Navbar expand="lg" className="headerDesign">
      <Container className="m-0 p-0">
        <Navbar.Brand className="px-3" href="/">
            <img
              src="src\assets\img\clinica-dental-high-resolution-logo-black-on-transparent-background.png"
              width="180vw"
              height="35h"
              className="d-inline-block align-top"
              alt="Clinica dental logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className=" menuLeft">
            <Nav.Link href="/">Nosotros</Nav.Link>
            <Nav.Link href="/">Consulta</Nav.Link>
            <Nav.Link href="/">Citas</Nav.Link>
            <NavDropdown title="Tratamientos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           </Nav>

           <Navbar.Text className="timetable">
             <p className="m-0">{calendarIcon} Lunes a Viernes</p>
             <p className="m-0"> {clockIcon} 09:00-14:00 15:00-19:00</p>
           </Navbar.Text>

           <Navbar.Text className="phone">
             {phoneIcon }   
             <p className="m-2">96 123 45 67</p>
           </Navbar.Text>

           <Nav className=" menuRight">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


// ReactDOM.render(phoneIcon, document.body)
