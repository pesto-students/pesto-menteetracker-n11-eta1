import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function BasicRowEditingGrid() {
  return (
    <div>
      <h1>Tasks</h1>
      <div style={{ height: 400, width: "100%", backgroundColor: '#23232e' }}>
        <DataGrid editMode="row" rows={rows} columns={columns} style={{color:"#b6b6b6"}} hideFooter={true}/>
      </div>
    </div>
  );
}

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
  },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    width: 200,
    type: "date",
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 200,
    editable: false,
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 200,
    editable: false,
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 200,
    type: 'boolean',
    editable: true,
  }
];

const rows = [
  {
    id: 1,
    name: 'Resume',
    dateCreated: '2020-01-01',
    description: 'Update resume',
    link: "example.com",
    Status: true
  },
  {
    id: 2,
    name: 'Cover Letter',
    dateCreated: '2020-01-01',
    description: 'Update cover letter',
    link: "example.com",
    Status: true
  },
]
