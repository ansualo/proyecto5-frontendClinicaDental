import React from 'react';
import './SelectField.css';
import Form from 'react-bootstrap/Form';

export const SelectField = ({ label, buttonName, options }) => {

  return (

    <>
      <div className="SelectFieldLabel">{label}</div>

      <Form.Select aria-label="Default select example">
        <option>{buttonName}</option>
        {options.map((item) =>
          <option value={item.id}>{`Dr. ${item.name} ${item.surname}`}</option>
        )}
      </Form.Select>
    </>
  );
}




