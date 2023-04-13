import './Filters.css';
export default function Filters({nombreFiltro,datoFiltro,muestraValor}){
   
  return(
    <div className="filtro-checkbox form-check form-switch m-4">
    <input className="bttn form-check-input" type="checkbox" id={datoFiltro} value={datoFiltro} onChange={muestraValor} />
    <label className="form-check-label" htmlFor={datoFiltro}>{nombreFiltro}</label>
  </div>      
    )
}