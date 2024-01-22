import { DataGrid, DataGridProps, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';

export interface StudentTableProps extends DataGridProps{
  rows: any[];
  columns: GridColDef[];
}



const StudentTable = ({ rows, columns , ...rest }: StudentTableProps) => {
  return (
    <div>

    
      <DataGrid rows={rows} columns={columns} {...rest} />
    </div>
  );
};

export default StudentTable;
