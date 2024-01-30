import "./DataTable.scss"
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";
import {Link} from 'react-router-dom';

type Props = {
    columns : GridColDef[],
    rows  : object[],
    slug  : string
}

function DataTable(props: Props) {

    const handleDelete = (id:number) => {
        console.log(id + 'deleted')
    }

    const actionColumn : GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="actions">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="view.svg" alt=""/>
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="delete.svg" alt=""/>
                    </div>
                </div>
            )
        }
    }

  return (
    <div className='DataTable'>
        <DataGrid className="dataGrid"
        slots={{toolbar: GridToolbar}}
        slotProps={{toolbar: {showQuickFilter: true,quickFilterProps:{debounceMs: 500}}}}
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable