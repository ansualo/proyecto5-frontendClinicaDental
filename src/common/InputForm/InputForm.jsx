import React from "react";
import './InputForm.css';
import Form from 'react-bootstrap/Form';

export const InputForm = ({ label, name, type, placeholder, functionHandler }) => {

    return (
        <Form>
        <Form.Group>
          <Form.Label >{label}</Form.Label>
          <Form.Control 
            className="inputDesign" 
            name={name}
            type={type} 
            placeholder={placeholder} 
            onChange={(e)=>functionHandler(e)}
          />
        </Form.Group>
      </Form>
    )
}