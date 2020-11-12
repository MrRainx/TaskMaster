import PrivateLayout from '@layouts/privatelayout';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CustomAutoComplete from '@components/forms/CustomAutoComplete';

const DashboardContainer = () => {
  const methods = useForm();

  return (
    <PrivateLayout title="Dashboard">
      <main className="container-fluid">
        <h4></h4>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <FormProvider {...methods}>
              <CustomAutoComplete
                label="Buscar"
                options={[]}
                name="buscador"
                predicate={() => null}
              />

              <h1>test</h1>
            </FormProvider>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default DashboardContainer;
