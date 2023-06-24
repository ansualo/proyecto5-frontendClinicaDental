import React, { useEffect, useState } from "react";
import './AppointmentForm.css';

import { SelectField } from "../../common/SelectField/SelectField.jsx";
import { getAllDentists } from "../../services/apiCalls";
import { Form } from "react-bootstrap";

export const AppointmentForm = () => {

    const [allDentists, setAllDentists] = useState([])

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


    return (
        <div className="appointmentDesign">
            <Form>
                <SelectField
                    label="Doctores"
                    buttonName="Por favor elige un doctor"
                    options={allDentists} />
            </Form>

        </div>

    )
}