import { IndexColumn } from '@components/table/columns';
import useCustomRouter from '@hooks/useCustomRouter';
import PrivateLayout from '@layouts/privatelayout';
import { Anotacion } from '@services/Anotaciones.service';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { Sidebar } from 'primereact/sidebar';
import styled from '@emotion/styled';
import { DIV } from '@components/pages/anotacionesTable';

const AnotacionesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const router = useCustomRouter();
  const [filter, setfilter] = useState('');

  const [showSideBar, setShowSideBar] = useState(false);

  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    setLoading(true);

    Anotacion.getAll((data) => {
      setData(data);
      console.log(data);
      setLoading(false);
    });
  }, []);

  return (
    <PrivateLayout title="Anotaciones" loading={loading}>
      <main className="container-fluid">
        <div className="text-center">
          <h4 className="display-4 my-5">
            Anotaciones{' '}
            <BsPlusCircle
              className="text-success cpointer"
              size="30"
              onClick={router.goTo('/anotaciones/create')}
            />
          </h4>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <DataTable
              value={data}
              className="p-datatable-gridlines p-datatable-customers"
              dataKey="id"
              rowHover
              paginator
              rows={10}
              emptyMessage="No customers found"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              selectionMode="single"
              selection={selectedRow}
              onSelectionChange={(row) => {
                setSelectedRow(row.value);
                setShowSideBar(true);
              }}
              rowsPerPageOptions={[10, 25, 50]}
            >
              {IndexColumn()}
              <Column field="titulo" sortable filter header="Titulo" />
              <Column
                header="Opciones"
                style={{ width: '100px' }}
                className="text-center"
                body={(rowData) => (
                  <div className="d-flex flex-row justify-content-around">
                    <Button
                      className="p-button-sm"
                      icon="pi pi-pencil"
                      onClick={router.goTo(`/anotaciones/update?id=${rowData?.id}`)}
                    />
                    <Button
                      icon="pi pi-times"
                      className="p-button-sm p-button-danger"
                      onClick={router.goTo(rowData.id)}
                    />
                  </div>
                )}
              />
            </DataTable>
          </div>
        </div>

        <Sidebar
          visible={showSideBar}
          position="right"
          baseZIndex={1000000}
          onHide={() => setShowSideBar(false)}
          style={{ width: '100%' }}
        >
          <div className="container-fluid">
            <div className="row mt-2 mt-md-4 mt-lg-5">
              <div className="col-12">
                <h3 className="text-center">
                  {selectedRow?.titulo}{' '}
                  <Button
                    icon="pi pi-pencil"
                    onClick={router.goTo(`/anotaciones/update?id=${selectedRow?.id}`)}
                  />
                </h3>
              </div>

              <div className="col-12 mt-4">
                <DIV dangerouslySetInnerHTML={{ __html: selectedRow?.descripcion }} />
              </div>
            </div>
          </div>
        </Sidebar>
     
      </main>
    </PrivateLayout>
  );
};

export default AnotacionesContainer;

