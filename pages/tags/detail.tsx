import React, { useEffect, useState } from 'react';
import PrivateLayout from '@layouts/privatelayout';
import appFirebase from 'fire-base';

const DetailTagContainer = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    appFirebase.db
      .collection('tags')
      .doc(id)
      .onSnapshot((snap) => setData(snap.data()));
  }, []);

  console.log(data);

  return (
    <PrivateLayout>
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="text-center">Tag</h1>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

DetailTagContainer.getInitialProps = ({ query }) => {
  return { ...query };
};

export default DetailTagContainer;
