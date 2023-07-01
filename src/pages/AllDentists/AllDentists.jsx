import React, { useEffect, useState } from "react";
import './AllDentists.css'
import { Col, Row, Container } from "react-bootstrap";
import { getAllDentists } from "../../services/apiCalls";


export const AllDentists = () => {

    const [dentistProfile, setDentistProfile] = useState([])

    useEffect(() => {
        if (dentistProfile.length === 0) {
            getAllDentists(dentistProfile)
                .then((res) => {
                    setDentistProfile(res.data.data);
                    console.log(res.data.data)
                })
                .catch((error) => console.log(error))
        }
    }, [])

    return (
        <div className="AllDentistsDesign">
            <Container className="dentistProfilesContainer">
                {dentistProfile.length > 0
                    ? (
                        dentistProfile.map((profile) => {
                            return (
                                <div className="eachDentistProfile" key={profile.id}>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Nombre</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.name}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Apellido</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.surname}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Número de teléfono</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.phone}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Dirección</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.address}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Email</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.email}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Fecha de nacimiento</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.date_of_birth}</div>
                                        </Col>
                                    </Row>
                                    <Row className="dentistProfileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllDentistsLabel">Número de colegiado</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllDentistsInfo">{profile.collegiate_number}</div>
                                        </Col>
                                    </Row>
                                </div>

                            )
                        })
                    )
                    : (
                        <div>CARGANDO...</div>
                    )
                }
            </Container>
        </div>
    )
}