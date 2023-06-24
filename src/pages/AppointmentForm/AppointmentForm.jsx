import React, { useEffect, useState } from "react";
import './AppointmentForm.css';

import { SelectField } from "../../common/SelectField/SelectField.jsx";
import { getAllDentists, getAllTreatments } from "../../services/apiCalls";
import { Form } from "react-bootstrap";



export const AppointmentForm = () => {

    const [allDentists, setAllDentists] = useState([]);
    const [allTreatments, setAllTreatments] = useState([]);

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

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


    return (
        <div className="appointmentDesign">
            <Form>
                <SelectField
                    fieldLabel="Doctor:"
                    buttonName="Por favor elige un doctor"

                    options={allDentists.map((dentist)=> (
                        {value: dentist.id , 
                        label: `Dr. ${dentist.name} ${dentist.surname}`  
                        }
                    ))} />

                <SelectField
                    fieldLabel="Tratamiento:"
                    buttonName="Por favor elige un tratamiento"

                    options={allTreatments.map((treatment)=> (
                        {value: treatment.id, 
                        label: treatment.name
                        }
                    ))} />

                <Form.Group>
                    <Form.Label>Seleccione la fecha</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="Dia" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Selecione la hora</Form.Label>
                    <Form.Control 
                        type="time" 
                        placeholder="Hora"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)} />
                </Form.Group>
            </Form>

        </div>

    )
}