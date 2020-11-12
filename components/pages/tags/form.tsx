import BtnLoading from '@components/Buttons/BtnLoading';
import TextInput from '@components/forms/InputText';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import CustomInputTextArea from '@components/forms/CustomInputTextArea';

const TagFormContainer = (props: FormTag) => {
  const { onSubmit, onSubmitError, loading } = props;

  const methods = useFormContext();

  console.log('RENDER');
  return (
    <React.Fragment>
      <main className="container-fluid">
        <h1 className="text-center display-4 my-5">Agregar Tag</h1>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}>
              <TextInput
                name="nombre"
                label="Nombre:"
                rules={{ required: 'Este campo es obligatorio' }}
              />

              <CustomInputTextArea
                name="descripcion"
                label="Descripcion:"
                rules={{ required: 'Este campo es obligatorio' }}
                rows={5}
              />

              <div className="row justify-content-center">
                <div className="col-md-5">
                  <Button variant="outline-danger" block>
                    Regresar
                  </Button>
                </div>
                <div className="col-md-5">
                  <BtnLoading
                    variant="outline-primary"
                    block
                    loading={loading}
                    loadingText="Procesando..."
                    label="Guardar"
                    type="submit"
                  />
                </div>
              </div>
           
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TagFormContainer;

export interface FormTag {
  onSubmit: any;
  onSubmitError?: any;
  loading?: boolean;
}
