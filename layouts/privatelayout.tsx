import Head from 'next/head';
import React from 'react';
import PrivateNavbar from '@components/Navbar/privateNavbar';
const PrivateLayout = (props: IPrivateLayout) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>TaskMaster | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrivateNavbar />
      <main className="container-fluid">{children}</main>

      <footer></footer>
    </>
  );
};

export default PrivateLayout;

interface IPrivateLayout {
  children: any;
  title?: String;
}
