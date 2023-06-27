import React, { useEffect, useState } from "react";
import './AppointmentsPatient.css'
import { deleteAppointment, getPatientAppointments } from "../../services/apiCalls";
import { Col, Row, Container } from "react-bootstrap";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

export const AppointmentsPatient = () => {

    const [appointments, setAppointments] = useState([]);

    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    const fetchAppointments = () => {
        getPatientAppointments(token)
            .then((res)=> setAppointments(res.data))
    }

    const handleDelete = async (appointmentId) => {
        await deleteAppointment(token, appointmentId)
        fetchAppointments()
    }

    useEffect(() => {
        if(appointments.length === 0) {
            fetchAppointments()
        }
    }, [])


    return(
        <div className="appointmentsDesign">
            <Container className = "appointmentsContainer">
                {appointments.length > 0
                    ? (
                        appointments.map((appointment) => {
                            return (
                                <div key={appointment.id} className="appointmentGroup">
                                    <div className="eachAppointment">
                                            <Row className="appointmentRow">
                                                <Col sm={10} md={4}>
                                                    <div className="appointmentLabel">Fecha</div>
                                                </Col>
                                                <Col sm={10} md={8}>
                                                    <div className="appointmentInfo">{new Date(appointment.date).toLocaleString()}</div>
                                                </Col>
                                            </Row>
                                            <Row className="appointmentRow">
                                                <Col sm={10} md={4}>
                                                    <div className="appointmentLabel">Tratamiento</div>
                                                </Col>
                                                <Col sm={10} md={8}>
                                                    <div className="appointmentInfo">{appointment.Treatment.name}</div>
                                                </Col>
                                            </Row>
                                            <Row className="appointmentRow">
                                                <Col sm={10} md={4}>
                                                    <div className="appointmentLabel">Doctor</div>
                                                </Col>
                                                <Col sm={10} md={8}>
                                                    <div className="appointmentInfo">{`${appointment.doctor.name} ${appointment.doctor.surname}`}</div>
                                                </Col>
                                            </Row>
                                            <Row className="appointmentRow">
                                                <Col sm={10} md={4}>
                                                    <div className="appointmentLabel">Precio</div>
                                                </Col>
                                                <Col sm={10} md={8}>
                                                    <div className="appointmentInfo">{appointment.price}</div>
                                                </Col>
                                            </Row>
                                    </div>
                                    <FunctionButton name="Modificar"></FunctionButton>
                                    <FunctionButton name="Cancelar" action={()=>{handleDelete(appointment.id)}}></FunctionButton>
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