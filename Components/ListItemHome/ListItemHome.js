import {Link} from "react-router-dom";
import "./ListItemHome.css";
export default function ListItemHome ({dato,infoPath}){
       
return(
    <button type="button"className =" ul btn-lg row col-auto my-6 p-3"><Link to={infoPath}>{dato}</Link></button>
)
}
