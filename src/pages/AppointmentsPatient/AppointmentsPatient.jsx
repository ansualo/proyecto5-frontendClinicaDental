import React, { useEffect, useState } from "react";
import './AppointmentsPatient.css'
import { deleteAppointment, getPatientAppointments } from "../../services/apiCalls";
import { Col, Row, Container } from "react-bootstrap";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { editingAppointment, saveId } from "../appointmentSlice";
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";

export const AppointmentsPatient = () => {

    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    const fetchAppointments = () => {
        getPatientAppointments(token)
            .then((res) => setAppointments(res.data))
    }

    const handleDelete = async (appointmentId) => {
        await deleteAppointment(token, appointmentId)
        fetchAppointments()
    }

    useEffect(() => {
        if (appointments.length === 0) {
            fetchAppointments()
        }
    }, [])

    const detailHandler = (appointmentId) => {
        dispatch(saveId({ id: appointmentId }))
        navigate('/citas/detalle')
    }

    const isEditing = (appointmentId) => {
        dispatch(saveId({ id: appointmentId }))
        dispatch(editingAppointment(true))
        navigate('/modificarcita')
    }

    return (
        <div className="appointmentsDesign">
            <Container className="appointmentsContainer">
                {appointments.length > 0
                    ? (
                        <>
                            {appointments.map((appointment) => {
                                return (
                                    <Container>
                                        <div key={appointment.id} className="appointmentGroup">
                                            <div className="eachAppointment" onClick={() => { detailHandler(appointment.id) }}>
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
                                            </div>
                                            <div className="appointmentButtons">
                                                <FunctionButton name="Modificar" action={() => { isEditing(appointment.id) }}></FunctionButton>
                                                <FunctionButton name="Cancelar" action={() => { handleDelete(appointment.id) }}></FunctionButton>
                                            </div>
                                        </div>
                                    </Container>
                                )
                            })}
                            <NavigateButton name={"Volver a mi perfil"} path={'/usuario'}></NavigateButton>
                        </>
                    )
                    : (
                        <div>CARGANDO...</div>
                    )
                }
            </Container>

        </div>
    )


}