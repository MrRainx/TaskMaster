import PrivateLayout from '@layouts/privatelayout';
import React from 'react';

export default function Home() {
  return (
    <PrivateLayout title="Inicio">
      <h1 className="text-center display-4 mt-5">Task Master</h1>
    </PrivateLayout>
  );
}
