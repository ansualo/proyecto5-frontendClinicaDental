import React from "react";
import './InputForm.css';
import Form from 'react-bootstrap/Form';

export const InputForm = ({ design, label, name, type, placeholder, functionHandler, onBlurFunction }) => {

    return (
        <Form>
        <Form.Group>
          <Form.Label >{label}</Form.Label>
          <Form.Control 
            className= {design} 
            name={name}
            type={type} 
            placeholder={placeholder} 
            onChange={(e)=>functionHandler(e)}
            onBlur={(e)=>onBlurFunction(e)}
          />
        </Form.Group>
      </Form>
    )
}