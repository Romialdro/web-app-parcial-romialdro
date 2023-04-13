import{useEffect, useState} from 'react';
import { Fragment } from 'react';
import "./Productos.css";
import Navegation from '../Navegation/Navegation';
import Filters from "../Filters/Filters";
import SectionCards from "../SectionCards/SectionCards";


export default function Productos() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        if(event.target.checked){
                let datoFiltro=event.target.value;
                if(datoFiltro === "" || datoFiltro === ""){
                let resultado= datos.filter((ch)=> ch.status === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "" || datoFiltro === ""){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === ""){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)
                } 
                
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
 
        let info= await fetch("api")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoProductos= dato.results
        console.log(infoProductos)
        setDatos(infoProductos)
        setInfoCompleta(infoProductos)
    }

     useEffect(()=>{
        mostarInfo() 
     },[])


    return(
        <Fragment>
            <Navegation />
            <div className='container-fluid col-12 p-2 mx-auto'><h2>Filters</h2></div>
            <section className='d-flex p-2 col-auto justify-content-around'>
                <Filters nombreFiltro="" datoFiltro="" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="" datoFiltro="" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="" datoFiltro="" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="" datoFiltro="" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="" datoFiltro="" muestraValor={mostrarValor}/> 
            </section>
                          
            <SectionCards datos={datos} />
        </Fragment>
    )
}