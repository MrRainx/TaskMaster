import React from 'react';
import { useFormContext } from 'react-hook-form';

const ErrorMessage = ({ name }) => {
  const { errors } = useFormContext();

  if (errors[name]) {
    return (
      <small id={name} className="p-invalid">
        {errors[name]?.message}
      </small>
    );
  }
  return null;
};

export default ErrorMessage;
