import "./AddModal.scss"
import { GridColDef} from "@mui/x-data-grid";

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function AddModal(props: Props) {
  return (
    <div className="addModal">
        <div className="modal">
                <h1>Add new {props.slug}</h1>
                <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            
            <div className="form">
                {props.columns.filter((ele)=>ele.field !== 'id' && ele.field !== 'img' ).map((item)=> (
                    <div className="formItem">
                        <label>{item.headerName}</label>
                        <input type={item.type} placeholder={item.field}/>
                    </div>
                ))}
            </div>
            <button className="saveButton">Send</button>
        </div>
    </div>
  )
}

export default AddModal