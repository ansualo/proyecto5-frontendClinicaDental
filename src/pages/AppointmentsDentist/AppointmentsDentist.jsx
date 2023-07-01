import React, { useEffect, useState } from "react";
import './AppointmentsDentist.css'
import { getDoctorAppointments } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";


export const AppointmentsDentists = () => {

    const [dentistsAppointments, setDentistsAppointments] = useState([]);
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    useEffect(() => {
        if (dentistsAppointments.length === 0) {
            getDoctorAppointments(token)
            .then((res) => {
                setDentistsAppointments(res.data)
                console.log(res.data)
            })
        }
    }, [])

    return (
        <div className="dentistsAppointmentsDesign">
            <Container className="dentistsAppointmentsContainer">
                {dentistsAppointments.length > 0
                    ? (
                        dentistsAppointments.map((appointment) => {
                            return (
                                <div key={appointment.id}>
                                    <div className="eachdentistsAppointment">
                                        <Row className="appointmentRow">
                                            <Col sm={10} md={5}>
                                                <div className="appointmentLabel">Id</div>
                                            </Col>
                                            <Col sm={10} md={7}>
                                                <div className="appointmentInfo">{(appointment.id)}</div>
                                            </Col>
                                        </Row>
                                        <Row className="appointmentRow">
                                            <Col sm={10} md={5}>
                                                <div className="appointmentLabel">Fecha</div>
                                            </Col>
                                            <Col sm={10} md={7}>
                                                <div className="appointmentInfo">{new Date(appointment.date).toLocaleString()}</div>
                                            </Col>
                                        </Row>
                                        <Row className="appointmentRow">
                                            <Col sm={10} md={5}>
                                                <div className="appointmentLabel">Paciente</div>
                                            </Col>
                                            <Col sm={10} md={7}>
                                                <div className="appointmentInfo">{`${appointment.patient.name} ${appointment.patient.surname}`}</div>
                                            </Col>
                                        </Row>
                                        <Row className="appointmentRow">
                                            <Col sm={10} md={5}>
                                                <div className="appointmentLabel">Tratamiento</div>
                                            </Col>
                                            <Col sm={10} md={7}>
                                                <div className="appointmentInfo">{appointment.Treatment.name}</div>
                                            </Col>
                                        </Row>
                                    </div>
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