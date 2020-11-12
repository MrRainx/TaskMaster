import PrivateNavbar from '@components/Navbar/privateNavbar';
import Head from 'next/head';
import React from 'react';

const PrivateLayout = (props?: IPrivateLayout): any => {
  const { children, title, loading } = props;

  if (loading) {
    return <h1 className="text-center display-4 mt-5">Cargando...</h1>;
  }

  return (
    <>
      <Head>
        <title>TaskMaster | {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" />
      </Head>

      <PrivateNavbar />

      {children}

      <footer></footer>
    </>
  );
};

export default PrivateLayout;

interface IPrivateLayout {
  children: any;
  title?: string;
  loading?: boolean;
}
