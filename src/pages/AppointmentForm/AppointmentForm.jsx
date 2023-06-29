import React, { useEffect, useState } from "react";
import './AppointmentForm.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SelectField } from "../../common/SelectField/SelectField.jsx";
import { createAppointment, getAllDentists, getAllTreatments } from "../../services/apiCalls";
import { Form } from "react-bootstrap";
import { FunctionButton } from "../../common/FunctionButton/FunctionButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";


export const AppointmentForm = () => {

    const [allDentists, setAllDentists] = useState([]);
    const [allTreatments, setAllTreatments] = useState([]);
    const [selectedTreatment, setSelectedTreatment] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate();
    const [confirmed, setConfirmed] = useState("")
    const datos = useSelector(userData);
    const token = datos?.credentials?.token?.data?.token;

    useEffect(() => {
        if (allDentists.length === 0) {
            getAllDentists(allDentists)
                .then((resultado) => {
                    setAllDentists(resultado.data.data)
                    // console.log(resultado.data.data)
                })
                .catch((error) => console.log(error))
        }
    }, [])

    useEffect(() => {
        if (allTreatments.length === 0) {
            getAllTreatments(allTreatments)
                .then((resultado) => {
                    setAllTreatments(resultado.data.data)
                    // console.log(resultado.data.data)
                })
                .catch((error) => console.log(error))
        }
    }, [])


    const handleSubmit = async () => {

        const newAppointment = {
            "user_id_2": Number(selectedDoctor),
            "treatment_id": Number(selectedTreatment),
            // "date": `${selectedDate} ${selectedTime}:00`
            "date": `${selectedDate.toISOString().split('T')[0]} ${selectedTime}:00`
        }

        console.log(newAppointment)

        await createAppointment(token, newAppointment)

        setTimeout(() => {
            navigate('/');
        }, 3500)

        setConfirmed("Su cita ha sido confirmada");
    }

    return (
        <div className="appointmentDesign">
            {confirmed !== ""
                ? (<div className="confirmed">{confirmed}</div>)
                : ( 
                    <>
                    <Form>
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

                            onChange={(e) => { setSelectedTreatment(e.target.value) }} />


                        <Form.Group>
                            <Form.Label>Seleccione la fecha:</Form.Label>
                                <DatePicker 
                                className={"dateDesign"}
                                selected={selectedDate}
                                minDate={currentDate}
                                onChange={(date) => setSelectedDate(date)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Selecione la hora</Form.Label>
                            <input
                                className={"dateDesign"}
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
                    </Form>

                    <FunctionButton name="Confirmar" action={handleSubmit}></FunctionButton>
                    </>
                )
            }


        </div>

    )
}