import { IndexColumn, OptionsColumn } from '@components/table/columns';
import PrivateLayout from '@layouts/privatelayout';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import Link from 'next/link';
import appFirebase, { Firebase } from 'fire-base';

const TagsContainer = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    appFirebase.db
      .collection('tags')
      .orderBy('nombre')
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map(Firebase.defaultMapper));
        setLoading(false);
      });
  }, []);

  return (
    <PrivateLayout title="Tags" loading={loading}>
      <main className="container-fluid">
        <div className="text-center">
          <h3 className="display-4 my-5">
            Tags{' '}
            <Link href="tags/create">
              <a className="text-success">
                <BsPlusCircle />
              </a>
            </Link>
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <DataTable
              value={data}
              dataKey="id"
              className="p-datatable-gridlines p-shadow-24"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              {IndexColumn()}
              <Column header="Nombre" field="nombre" />
              <Column header="Descripcion" field="descripcion" />

              {OptionsColumn({
                editPath: (row) => `/tags/update?id=${row.id}`,
                deletePath: (row) => `/tags/detail?id=${row.id}`,
              })}
            </DataTable>
          </div>
        </div>
      </main>
    </PrivateLayout>
  );
};

export default TagsContainer;
