import React, { useState } from 'react';
import { Form, FormLabelProps } from 'react-bootstrap';
import { ValidationRules, Controller, useFormContext } from 'react-hook-form';
import { AutoComplete, AutoCompleteProps } from 'primereact/autocomplete';
import { IPredicate } from 'types/commons';

const CustomAutoComplete = (props: ICustomAutoComplete) => {
  const {
    label,
    labelProps,
    name,
    rules,
    inputProps,
    options,
    predicate,
  } = props;
  const [localOptions, setLocalOptions] = useState(null);
  const { control } = useFormContext();

  const onComplete = () => {
    const results = options.filter(predicate);
    setLocalOptions(results);
  };

  return (
    <Form.Group>
      <Form.Label {...labelProps}>{label}</Form.Label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={null}
        render={({ onChange, value }) => (
          <AutoComplete
            {...inputProps}
            value={value}
            onChange={({ value }) => onChange(value)}
            suggestions={localOptions}
            completeMethod={onComplete}
          />
        )}
      />
    </Form.Group>
  );
};

export default CustomAutoComplete;

export interface ICustomAutoComplete {
  label: string;
  name: string;
  rules?: ValidationRules;
  options: Array<any>;
  inputProps?: AutoCompleteProps;
  labelProps?: FormLabelProps;
  predicate<V, A>(props: IPredicate<V, A>): Array<any>;
}
