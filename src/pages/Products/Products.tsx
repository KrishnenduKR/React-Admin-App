import AddModal from "../../components/AddModal/AddModal";
import DataTable from "../../components/DataTable/DataTable";
import "./Products.scss"
import {useState} from 'react';
import {GridColDef} from '@mui/x-data-grid'; 
import { products } from "../../data";

function Products() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 200,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 100,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 100,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 100,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <span className="title">Products</span>
        <button onClick={()=> setOpen(true)}>Add New Product</button>
      </div>
      <div className="list">
        <DataTable columns={columns} rows={products} slug="products"/>
      </div>
      {open && <AddModal slug="product" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Products