import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonProps } from 'react-bootstrap';

const BtnLoading = (props: IBtnLoading) => {
  const { label, loading, loadingText = 'Procesando...', ...rest } = props;

  if (loading) {
    return (
      <Button disabled {...rest}>
        {loadingText}
      </Button>
    );
  }
  return <Button {...rest}>{label}</Button>;
};

export default BtnLoading;

interface IBtnLoading extends ButtonProps {
  label: string | any;
  loading: boolean;
  loadingText?: string;
}
