import TextInput from '@components/forms/InputText';
import useCustomRouter from '@hooks/useCustomRouter';
import dynamic from 'next/dynamic';
import { Button } from 'primereact/button';
import React, { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

const CustomEditor = dynamic(() => import('../../forms/CustomEditor'), {
  ssr: false,
});

const AnotacionFormContainer = ({ onSubmit, onSubmitError = null, titulo, defaultData = null }) => {
  const methods = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (defaultData) {
      methods.reset(defaultData);
    }
  }, [defaultData]);

  const router = useCustomRouter();

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <h1 className="text-center my-5">{titulo}</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <form onSubmit={methods.handleSubmit(onSubmit, onSubmitError)}>
              <TextInput className="" name="titulo" label="Titulo" />

              <Controller
                name="descripcion"
                defaultValue=""
                control={methods.control}
                render={({ onChange, value }) => <CustomEditor value={value} onChange={onChange} />}
              />

              <div className="row justify-content-center">
                <div className="col-md-5 my-2">
                  <Button
                    label="Cancelar"
                    className="p-button-danger btn-block"
                    type="button"
                    onClick={router.goTo('/')}
                  />
                </div>
                <div className="col-md-5 my-2">
                  <Button label="Guardar" className="btn-block" type="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </React.Fragment>
  );
};

export default AnotacionFormContainer;
