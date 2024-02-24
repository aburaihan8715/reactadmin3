import './users.scss';

import { GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { userRows } from '../../data';
// import { useQuery } from '@tanstack/react-query';

import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 100,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 100,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 100,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 100,
    type: 'string',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 80,
    type: 'boolean',
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // const { isPending, data } = useQuery({
  //   queryKey: ['allusers'],
  //   queryFn: () =>
  //     fetch('http://localhost:8800/api/users').then((res) => res.json()),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {/* {isPending ? (
        'Loading...'
      ) : (
        <DataTable columns={columns} rows={data} slug="users" />
      )} */}
      <DataTable columns={columns} rows={userRows} slug="users" />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
