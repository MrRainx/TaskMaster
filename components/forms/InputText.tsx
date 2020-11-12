import classnames from 'classnames';
import { InputText, InputTextProps } from 'primereact/inputtext';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import InputLayout from './InputLayout';
import { BaseFormFieldProps } from './types';

const TextInput = (props: ITextInput) => {
  const { label, name, rules, ref, className, ...rest } = props;
  const { control, errors } = useFormContext();

  return (
    <InputLayout label={label} name={name}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ onChange, value }) => (
          <InputText
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

export default TextInput;

export type ITextInput = InputTextProps & BaseFormFieldProps;
