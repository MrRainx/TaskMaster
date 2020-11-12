import useCustomRouter from '@hooks/useCustomRouter';
import { Column, ColumnProps } from 'primereact/column';
import React from 'react';
import { Button } from 'primereact/button';

export const IndexColumn = (props?: IndexColumnProps) => (
  <Column
    header={props?.header || '#'}
    body={(rowData: any, row: any) => row.rowIndex + 1}
    style={{ width: '80px', textAlign: 'center', ...props?.style }}
    {...props}
  />
);

export type IndexColumnProps = ColumnProps;

const defaultStyles = {
  width: '180px',
};
export const OptionsColumn = (props?: OptionsColumnsProps) => {
  const router = useCustomRouter();

  return (
    <Column
      header={props?.header || 'Opciones'}
      style={{ ...defaultStyles, ...props.style }}
      body={(rowData) => (
        <React.Fragment>
          <div className="row justify-content-center">
            {props.editPath && (
              <Button icon="pi pi-pencil" onClick={router.goTo(props.editPath(rowData))} />
            )}

            {props.deletePath && (
              <Button icon="pi pi-times" onClick={router.goTo(props.deletePath(rowData))} />
            )}
          </div>
        </React.Fragment>
      )}
    />
  );
};

export type OptionsColumnsProps = ColumnProps & {
  editPath?(rowData: any): string;
  deletePath?(rowData: any): string;
  style?: any;
};
