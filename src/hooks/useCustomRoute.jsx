import {useState} from 'react'
import Dashboard from '../routes/Dashboard';
import Login from '../routes/Login';
import Transactions from '../routes/Transactions';
import Categories from '../routes/Categories';
import NotFound from '../routes/NotFound';

export const useCustomRoute = () =>{
    const [ruta, setRuta] = useState("/");
    const asignarComponente = ()=>{
    if (ruta == "/") {
      return <Dashboard />;
    } else if (ruta == "/login") {
      return <Login />;
    } else if (ruta == "/transaction") {
      return <Transactions />;
    } else if (ruta == "/categories") {
      return <Categories />;
    } else {
      return <NotFound />;
    }
  }
    return {asignarComponente, setRuta};
}

// TODO:Regresar un componente y el setRuta