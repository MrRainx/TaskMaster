import AnotacionFormContainer from '@components/pages/anotaciones/form';
import useCustomToast from '@hooks/useCustomToast';
import PrivateLayout from '@layouts/privatelayout';
import { Anotacion } from '@services/Anotaciones.service';
import appFirebase from 'fire-base';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const UpdateAnotacionContainer = ({ id }) => {
  const { addSuccessToast, addErrorToast } = useCustomToast();
  const [loading, setloading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const router = useRouter();

  useEffect(() => {
    Anotacion.getById(id, (item) => {
      console.log(item);
      setData(item);
    });
  }, []);

  const onSubmit = async (data) => {
    setloading(true);
    console.log(data);

    try {
      await appFirebase.db.collection('anotaciones').doc(id).update(data);
      addSuccessToast('SE HA EDITADO LA ANOTACION CORRECTAMENTE');
      return router.push('/');
    } catch (error) {
      addErrorToast('HA OCURRIDO UN PROBLEMA AL EDITAR LA ANOTACION');
    }

    setloading(true);
  };

  return (
    <PrivateLayout>
      <main className="container-fluid">
        <AnotacionFormContainer titulo="Editar Anotacion" onSubmit={onSubmit} defaultData={data} />
      </main>
    </PrivateLayout>
  );
};

UpdateAnotacionContainer.getInitialProps = ({ query }) => ({ ...query });

export default UpdateAnotacionContainer;
