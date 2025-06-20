import { createContext, useContext, useState } from "react";
import Dashboard from "../routes/Dashboard";
import Login from "../routes/Login";
import Transactions from "../routes/Transactions";
import Categories from "../routes/Categories";
import NotFound from "../routes/NotFound";

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [ruta, setRuta] = useState("/");

  const asignarComponente = () => {
    if (ruta === "/") return <Dashboard />;
    if (ruta === "/login") return <Login />;
    if (ruta === "/transaction") return <Transactions />;
    if (ruta === "/categories") return <Categories />;
    return <NotFound />;
  };

  return (
    <RouteContext.Provider value={{ ruta, setRuta, asignarComponente }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useCustomRoute = () => useContext(RouteContext);
