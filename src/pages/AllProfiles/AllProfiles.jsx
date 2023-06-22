import React, { useEffect, useState } from "react";
import './AllProfiles.css'
import { Col, Row, Container } from "react-bootstrap";
import { getAllProfiles } from "../../services/apiCalls";


export const AllProfiles = () => {

    const [profilesInfo, setProfilesInfo] = useState([])

    useEffect(() => {
        if (profilesInfo.length === 0) {

            getAllProfiles(profilesInfo)
                .then((resultado) => {
                    setProfilesInfo(resultado.data.data);
                    // console.log(resultado.data.data)
                })

                .catch((error) => console.log(error))
        }

    }, [])

    return (
        <div className="AllProfilesDesign">
            <Container className = "profilesContainer">
                {getAllProfiles.length > 0
                    ? (
                        profilesInfo.map((profile) => {
                            return (
                                <div className="eachProfile">
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Nombre</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.name}</div>
                                            </Col>
                                        </Row>
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Apellido</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.surname}</div>
                                            </Col>
                                        </Row>
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Fecha de nacimiento</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.date_of_birth}</div>
                                            </Col>
                                        </Row>
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Número de teléfono</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.phone}</div>
                                            </Col>
                                        </Row>
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Dirección</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.address}</div>
                                            </Col>
                                        </Row>
                                        <Row className="profileRow">
                                            <Col sm={10} md={4}>
                                                <div className="AllProfilesLabel">Email</div>
                                            </Col>
                                            <Col sm={10} md={8}>
                                                <div className="AllProfilesInfo">{profile.email}</div>
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