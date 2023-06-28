import React from "react";
import './InputForm.css';
import Form from 'react-bootstrap/Form';
import { checkError } from "../../services/useful";

export const InputForm = ({ design, label, name, type, placeholder, maxLength, state, errorState}) => {

  const inputHandler = ( e, state) => {
    state((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  const inputCheck = (e, errorState) => {

    let messageError = checkError(e.target.name, e.target.value);

    errorState((prevState) => ({
        ...prevState,
        [e.target.name + 'Error']: messageError
    }))

}
    return (
        <Form>
        <Form.Group>
          <Form.Label >{label}</Form.Label>
          <Form.Control 
            className= {design} 
            name={name}
            type={type} 
            placeholder={placeholder} 
            maxLength={maxLength}
            onChange={(e)=>inputHandler(e, state)}
            onBlur={(e)=>inputCheck(e, errorState)}
          />
        </Form.Group>
      </Form>
    )
}