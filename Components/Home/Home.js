import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";
import Navigation from "../Navegation/Navegation";
import Footer from "../Footer/Fotter";
import { Fragment } from "react";



export default function Home() {

    return(
    <Fragment>
    <Navigation/>  
    <div className="container">
      <div className="row justify-content-center align-items-center text-center vh-100">
        <div className="col-12">
          <h1>Proyect web-app Romi</h1>
          <ul className="nav justify-content-between p-5 m-5 text-center">
            <ListItemHome dato="Productos" infoPath="/Productos" />
            <ListItemHome dato="Contact" infoPath="/contact" />
          </ul>
        </div>
        <div className="col-12 mt-5">
          <img src="https://via.placeholder.com/400x200" alt="placeholder" className="img-fluid mx-auto d-block" />
        </div>
      </div>
    </div>
    </Fragment>
     
    )
}


