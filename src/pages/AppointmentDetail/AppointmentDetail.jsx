import React, { useEffect, useState } from "react";
import './AppointmentDetail.css'
import { getOneAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { appointmentData } from "../appointmentSlice";
import { userData } from "../userSlice";
import { Col, Row, Container } from "react-bootstrap";
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";

export const AppointmentDetail = () => {

    let appointment = useSelector(appointmentData);
    let appointmentId = appointment.id;
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    const [detailAppointment, setDetailAppointment] = useState("")

    useEffect(() => {
        getOneAppointment(token, appointmentId)
            .then((res) => {
                setDetailAppointment(res.data);
                console.log(res.data);
            });
    }, []);

    return (

    <div className="appointmentDetailDesign">
        <Container className = "appointmentDetailContainer">
            <Row className="appointmentDetailRow">
                <Col sm={10} md={4}>
                    <div className="appointmentDetailLabel">Tratamiento</div>
                </Col>
                <Col sm={10} md={8}>
                    <div className="appointmentDetailInfo">{detailAppointment?.Treatment?.name}</div>
                </Col>
            </Row>
            <Row className="appointmentDetailRow">
                <Col sm={10} md={4}>
                    <div className="appointmentDetailLabel">Fecha</div>
                </Col>
                <Col sm={10} md={8}>
                    <div className="appointmentDetailInfo">{new Date(detailAppointment?.date).toLocaleDateString()}</div>
                </Col>
            </Row>
            <Row className="appointmentDetailRow">
                <Col sm={10} md={4}>
                    <div className="appointmentDetailLabel">Hora</div>
                </Col>
                <Col sm={10} md={8}>
                    <div className="appointmentDetailInfo">{new Date(detailAppointment?.date).toLocaleTimeString()}</div>
                </Col>
            </Row>
            <Row className="appointmentDetailRow">
                <Col sm={10} md={4}>
                    <div className="appointmentDetailLabel">Doctor</div>
                </Col>
                <Col sm={10} md={8}>
                    <div className="appointmentDetailInfo">{`${detailAppointment?.doctor?.name} ${detailAppointment?.doctor?.surname}`}</div>
                </Col>
            </Row>
            <Row className="appointmentDetailRow">
                <Col sm={10} md={4}>
                    <div className="appointmentDetailLabel">Precio</div>
                </Col>
                <Col sm={10} md={8}>
                    <div className="appointmentDetailInfo">{`${detailAppointment?.price}€`}</div>
                </Col>
            </Row>
            <NavigateButton name={"Volver a todas mis citas"} path={'/citas'}></NavigateButton>
        </Container>
    </div>
    )
}