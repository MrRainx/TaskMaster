import classnames from 'classnames';
import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import InputLayout from './InputLayout';
import { BaseFormFieldProps } from './types';

const CustomInputTextArea = (props?: ICustomInputTextArea) => {
  const { label, name, rules, ref, className, ...rest } = props;

  const { control, errors } = useFormContext();
  return (
    <InputLayout label={label} name={name}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => (
          <InputTextarea
            value={value}
            className={classnames({
              'w-100': true,
              'p-invalid': !!errors[name],
              [className]: true,
            })}
            onChange={(e) => onChange(e.currentTarget.value)}
            {...rest}
          />
        )}
      />
    </InputLayout>
  );
};

export default CustomInputTextArea;

export type ICustomInputTextArea = InputTextareaProps & BaseFormFieldProps;
