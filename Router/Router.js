import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "../Components/Home/Home";
import Productos from '../Components/Productos/Productos';
import Contact from '../Components/Contact/Contact';

export default function Router(){
    return(
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/Productos' element={<Productos/>}/>
             <Route path='/Contact' element={<Contact/>}/>
         </Routes>     
     </BrowserRouter>

    )


}