import React, { useEffect, useState } from "react";
import './Profile.css'
import { Col, Row, Container } from "react-bootstrap";
import { getProfile } from "../../services/apiCalls";
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";
import { AppointmentsPatient } from "../AppointmentsPatient/AppointmentsPatient";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";

export const Profile = () => {

    const [profileInfo, setProfileInfo] = useState({
        name: "",
        surname: "",
        date_of_birth: "",
        phone: "",
        address: "",
        email: "",
        password: ""
    })

    useEffect(()=>{
        if (profileInfo !== ""){

            getProfile(profileInfo)
            .then((resultado) => {
                setProfileInfo(resultado.data.data);
                // console.log(resultado.data.data)
            })

            .catch((error) => console.log(error))
        }

    }, [])

    return (
        <div className="profileDesign">
            <Container>
                <Row className="buttons">
                    <Col sm={10} md={3}>
                        <NavigateButton name="Ver todas mis citas" path={'/usuario/citas'}></NavigateButton>
                    </Col>
                    <Col sm={10} md={3}>
                        <NavigateButton name="PEDIR CITA" path={'/pedircita'}></NavigateButton>
                    </Col>
                    <Col sm={10} md={3}>
                        <NavigateButton name="Modificar perfil" path={'/modificarperfil'}></NavigateButton>
                    </Col>
                </Row>
                <Row className="userProfile">
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Nombre</div>
                        <div className="profileInfo">{profileInfo.name}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Apellidos</div>
                        <div className="profileInfo">{profileInfo.surname}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Fecha de nacimiento</div>
                        <div className="profileInfo">{profileInfo.date_of_birth}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Número de teléfono</div>
                        <div className="profileInfo">{profileInfo.phone}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Dirección</div>
                        <div className="profileInfo">{profileInfo.address}</div>
                    </Col>
                    <Col sm={10} md={6}>
                        <div className="profileLabel">Email</div>
                        <div className="profileInfo">{profileInfo.email}</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={10} md={6}></Col>
                </Row>
            </Container>
        </div>
    )



}