import Head from 'next/head';
import React from 'react';

const Publiclayout = (props: { children: any; title?: string }) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>TaskMaster | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <footer></footer>
    </>
  );
};

export default Publiclayout;
