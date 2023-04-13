import Card from "../Card/Card";
import './SectionCards.css';

export default function SectionCards({datos}) {

   
    return(
        <section className="m-0 vh-100 row d-flex col-auto justify-content-around">

            {datos.map((dato)=>{ 
                return <Card key={dato.id} info={dato}/>
            })} 
         
        </section>
    )
}