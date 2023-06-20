import React from 'react'
import './Home.css'
import { Col, Row } from 'react-bootstrap'
import { CustomButton } from '../../common/CustomButton/CustomButton';

export const Home = () => {

    return(
        <div className="homeDesign">
            <Row className="row-width">
                <Col className="square1 px-5" sm={10} md={12}>Nos enfocamos en transformar sonrisas y mejorar vidas</Col>
                <Col className="square2" sm={10} md={7}></Col>
                <Col className="square3 px-5" sm={10} md={5}>
                    Nuestro equipo de profesionales altamente capacitados está dedicado a ofrecerte tratamientos dentales de vanguardia, combinados con un enfoque cálido y acogedor
                    <CustomButton name="Pide tu cita" path='/citas'></CustomButton>
                </Col>

            </Row>
            <Row className="row-width">
                <Col className="square4 mt-5" sm={10} md={12}></Col>
            </Row>
        </div>
    )
}

