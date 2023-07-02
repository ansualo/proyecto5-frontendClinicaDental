import React from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'

export const Home = () => {

    return (
        <div className="homeDesign">
            <Container fluid className="homeContainer">
                <Row className="row-width">
                    <Col className="square1" xs={9} md={10}>
                        Nos enfocamos en transformar sonrisas y mejorar vidas
                    </Col>
                    <Col className="square2" xs={6} md={6}></Col>
                    <Col className="square3" xs={4} md={4}>
                        Nuestro equipo está dedicado a ofrecerte tratamientos dentales de vanguardia, combinados con un enfoque cálido y acogedor
                    </Col>
                </Row>
                <Row className="row-width">
                    <Col className="square4" xs={11} md={11}></Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="square5 ms-5" xs={10} md={11}>
                        <p className="mx-5">Lunes a Viernes</p>
                        <p className="mx-5">09:00-14:00 15:00-19:00</p>
                        <p className="mx-5">96 123 45 67</p>
                        <p className="mx-5">C/ Guillem de castro 22, Valencia</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

