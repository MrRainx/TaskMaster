import AnotacionFormContainer from '@components/pages/anotaciones/form';
import useCustomRouter from '@hooks/useCustomRouter';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privatelayout';
import appFirebase from 'fire-base';
import React, { useState } from 'react';

const CreateAnotacionContainer = () => {
  const { addSuccessToast, addErrorToast } = useCustomToast();
  const [loading, setloading] = useState<boolean>(false);
  const router = useCustomRouter();

  const onSubmit = async (data) => {
    setloading(true);
    try {
      await appFirebase.db.collection('anotaciones').add(data);
      addSuccessToast('SE HA AGREGADO LA TAG CORRECTAMENTE');
      return router.push('/');
    } catch (error) {
      addErrorToast('HA OCURRIDO UN PROBLEMA AL AGREGAR LA TAG');
    }
    setloading(true);
  };

  return (
    <PrivateLayout>
      <main className="container-fluid">
        <AnotacionFormContainer titulo="Agregar Anotacion" onSubmit={onSubmit} />
      </main>
    </PrivateLayout>
  );
};

export default CreateAnotacionContainer;
