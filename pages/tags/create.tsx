import TagFormContainer from '@components/pages/tags/form';
import PrivateLayout from '@layouts/privatelayout';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import appFirebase from 'fire-base';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/router';

const CreateTagContainer = () => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      nombre: '',
      descripcion: '',
    },
  });

  const { addSuccessToast, addErrorToast } = useCustomToast();
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setloading(true);
    try {
      await appFirebase.db.collection('tags').add(data);
      addSuccessToast('SE HA AGREGADO LA TAG CORRECTAMENTE');
      return router.push('/tags');
    } catch (error) {
      addErrorToast('HA OCURRIDO UN PROBLEMA AL AGREGAR LA TAG');
    }
    setloading(true);
  };

  return (
    <PrivateLayout title="Tag">
      <main className="container-fluid">
        <FormProvider {...methods}>
          <TagFormContainer onSubmit={onSubmit} loading={loading} />
        </FormProvider>
      </main>
    </PrivateLayout>
  );
};

export default CreateTagContainer;
