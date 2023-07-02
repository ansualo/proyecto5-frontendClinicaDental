import React, { useEffect, useState } from "react";
import './AppointmentForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SelectField } from "../../common/SelectField/SelectField.jsx";
import { createAppointment, getAllDentists, getAllTreatments, updateAppointment } from "../../services/apiCalls";
import { Form } from "react-bootstrap";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { NavigateButton } from "../../common/NavigateButton/NavigateButton";
import { appointmentData, editingAppointment } from "../appointmentSlice";


export const AppointmentForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [allDentists, setAllDentists] = useState([]);
    const [allTreatments, setAllTreatments] = useState([]);
    const [selectedTreatment, setSelectedTreatment] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [confirmed, setConfirmed] = useState("")
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;
    const isEditing = useSelector((state) => state.appointment.editing)

    let appointment = useSelector(appointmentData);
    let appointmentId = appointment.id;

    useEffect(() => {
        if (allDentists.length === 0) {
            getAllDentists(allDentists)
                .then((resultado) => {
                    setAllDentists(resultado.data.data)
                })
                .catch((error) => console.log(error))
        }
    }, [])

    useEffect(() => {
        if (allTreatments.length === 0) {
            getAllTreatments(allTreatments)
                .then((resultado) => {
                    setAllTreatments(resultado.data.data)
                })
                .catch((error) => console.log(error))
        }
    }, [])


    const handleSubmit = async () => {

        const updatedAppointmentId = appointmentId;

        const bodyAppointment = {
            "user_id_2": Number(selectedDoctor),
            "treatment_id": Number(selectedTreatment),
            "date": `${selectedDate.toISOString().split('T')[0]} ${selectedTime}:00`
        }

        {
            isEditing === true
            ? (
                await updateAppointment(token, appointmentId, bodyAppointment),
                dispatch(editingAppointment(false))
            )
            : (
                await createAppointment(token, bodyAppointment)
            )
        }

        setTimeout(() => {
            navigate('/usuario');
        }, 1500)

        setConfirmed("Su cita ha sido confirmada");
    }

    return (
        <div className="appointmentDesign">
            {confirmed !== ""
                ? (<div>{confirmed}</div>)
                : (
                    <Form>
                        <div className="formFields">
                            <SelectField
                                fieldLabel="Doctor:"
                                buttonName="Por favor elige un doctor"
                                options={allDentists.map((dentist) => (
                                    {
                                        value: dentist.id,
                                        label: `Dr. ${dentist.name} ${dentist.surname}`
                                    }
                                ))}
                                onChange={(e) => { setSelectedDoctor(e.target.value) }}
                            />
                            <SelectField
                                fieldLabel="Tratamiento:"
                                buttonName="Por favor elige un tratamiento"
                                options={allTreatments.map((treatment) => (
                                    {
                                        value: treatment.id,
                                        label: treatment.name
                                    }
                                ))}
                                onChange={(e) => { setSelectedTreatment(e.target.value) }}
                            />
                            <Form.Group>
                                <Form.Label>Seleccione la fecha:</Form.Label>
                                <DatePicker
                                    className={"dateDesign"}
                                    selected={selectedDate}
                                    minDate={currentDate}
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Seleccione la hora:</Form.Label>
                                <input
                                    className={"dateDesign ms-4"}
                                    type="time"
                                    placeholder="Hora"
                                    list="timelist"
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)} />
                                <datalist id="timelist">
                                    <option value="09:00" />
                                    <option value="09:30" />
                                    <option value="10:00" />
                                    <option value="10:30" />
                                    <option value="11:00" />
                                    <option value="11:30" />
                                    <option value="12:00" />
                                    <option value="12:30" />
                                    <option value="13:00" />
                                    <option value="13:30" />
                                    <option value="16:00" />
                                    <option value="16:30" />
                                    <option value="17:00" />
                                    <option value="17:30" />
                                    <option value="18:00" />
                                    <option value="18:30" />
                                </datalist>
                            </Form.Group>
                        </div>
                        <FunctionButton name="Confirmar" action={handleSubmit}></FunctionButton>
                        <NavigateButton name="Volver" path={'/usuario'}></NavigateButton>
                    </Form>
                )
            }
        </div>
    )
}