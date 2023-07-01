import React, { useEffect, useState } from "react";
import './AllPatients.css'
import { Col, Row, Container } from "react-bootstrap";
import { getAllPatients } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";


export const AllPatients = () => {

    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;
    const [profilesInfo, setProfilesInfo] = useState([])
    
    useEffect(() => {
        if (profilesInfo.length === 0) {

            getAllPatients(token)
                .then((resultado) => {
                    setProfilesInfo(resultado.data.data);
                    // console.log(resultado.data.data)
                })

                .catch((error) => console.log(error))
        }

    }, [])

    return (
        <div className="AllPatientsDesign">
            <Container className="profilesContainer">
                {getAllPatients.length > 0
                    ? (
                        profilesInfo.map((profile) => {
                            return (
                                <div className="eachProfile" key={profile.id}>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Nombre</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.name}</div>
                                        </Col>
                                    </Row>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Apellido</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.surname}</div>
                                        </Col>
                                    </Row>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Fecha de nacimiento</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.date_of_birth}</div>
                                        </Col>
                                    </Row>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Número de teléfono</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.phone}</div>
                                        </Col>
                                    </Row>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Dirección</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.address}</div>
                                        </Col>
                                    </Row>
                                    <Row className="profileRow">
                                        <Col sm={10} md={4}>
                                            <div className="AllPatientsLabel">Email</div>
                                        </Col>
                                        <Col sm={10} md={8}>
                                            <div className="AllPatientsInfo">{profile.email}</div>
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