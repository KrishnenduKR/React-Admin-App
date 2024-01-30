import AddModal from "../../components/AddModal/AddModal";
import DataTable from "../../components/DataTable/DataTable"
import { userRows } from "../../data";
import "./Users.scss"
import { GridColDef} from "@mui/x-data-grid";
import {useState} from 'react';

function Users() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || '/noavatar.png'} alt=""/>
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 100,
      type: 'string',
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 100,
      type: 'string',
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 180,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 100,
      editable: true,
      type: 'string'
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: 100,
      type: 'string'
    },
    {
        field: 'verified',
        headerName: 'Verified',
        width: 80,
        type: "boolean"
    },
  ];

  const [open,setOpen] = useState(false);
  return (

    <div className="users">
      <div className="info">
        <span className="title">Users</span>
        <button onClick={()=> setOpen(true)}>Add New User</button>
      </div>
      <div className="list">
        <DataTable columns={columns} rows={userRows} slug="users"/>
      </div>
      {open && <AddModal slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users