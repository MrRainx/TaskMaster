import TagFormContainer from '@components/pages/tags/form';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privatelayout';
import appFirebase, { Firebase } from 'fire-base';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const UpdateTagContainer = ({ id }) => {
  const methods = useForm({ mode: 'onChange' });
  const { addSuccessToast, addErrorToast } = useCustomToast();
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setloading(true);
    appFirebase.db
      .collection('tags')
      .doc(id)
      .onSnapshot((snap) => {
        setloading(false);
        const data = snap.data();
        methods.reset({ ...data });
      });
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    setloading(true);

    try {
      await appFirebase.db.collection('tags').doc(id).update(data);
      addSuccessToast('SE HA EDITADO LA TAG CORRECTAMENTE');
      return router.push('/tags');
    } catch (error) {
      addErrorToast('HA OCURRIDO UN PROBLEMA AL EDITAR LA TAG');
    }
    setloading(false);
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

UpdateTagContainer.getInitialProps = ({ query }) => {
  return { id: query.id };
};

export default UpdateTagContainer;
