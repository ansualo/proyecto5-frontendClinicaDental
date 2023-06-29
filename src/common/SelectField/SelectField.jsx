import React from 'react';
import './SelectField.css';
import Form from 'react-bootstrap/Form';

export const SelectField = ({ fieldLabel, buttonName, options, onChange }) => {

  return (

    <>
      <div className="selectFieldLabel">{fieldLabel}</div>

      <Form.Select aria-label="Default select example" className="selectFieldDrop" onChange={onChange}>
        <option>{buttonName}</option>
        {options.map((item) =>
          <option key={item.value} value={item.value}>{item.label}</option>
        )}
      </Form.Select>
    </>
  );
}




