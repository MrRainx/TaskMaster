import React from 'react';
import { Form } from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';

const InputLayout = ({ children, label, name }) => {
  return (
    <Form.Group>
      <span className="p-float-label">
        {children}
        <label htmlFor={name}>{label}</label>
      </span>
      <ErrorMessage name={name} />
    </Form.Group>
  );
};

export default InputLayout;
