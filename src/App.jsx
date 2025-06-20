import { ArrowLeftRight, Blocks, ChartNoAxesCombined, LogOut } from "lucide-react";
import NavLi from "./atoms/NavLi";
import { useCustomRoute } from "./hooks/useCustomRoute"
import { useState } from "react";

const App = () => {
  const { asignarComponente, setRuta } = useCustomRoute();



  
  
  const [navVisibility,setNavVisibility] = useState(true);


  return (
    <>
      {navVisibility && (<nav className="shadow rounded bg-slate-600 w-screen lg:w-1/10 lg:h-screen fixed left-0 top-0">
        <ul className=" m-3 h-full flex  lg:flex-col justify-between text-white text-xl gap-3  sm:pe-2 lg:pb-[25px]">
          <div className="sm:flex lg:block sm:gap-3" >

            <NavLi setHook={() => setRuta("/")}>
              <ChartNoAxesCombined /> Dashboard
            </NavLi>

            <NavLi setHook={() => setRuta("/transaction")}>
              <ArrowLeftRight /> Transactions
            </NavLi>

            <NavLi setHook={() => setRuta("/categories")}>
              <Blocks /> Categories
            </NavLi>
          </div>
          <NavLi setHook={() =>{ 
            setNavVisibility(false);
            setRuta("/login")
            }
            }>
            <LogOut /> Logout
          </NavLi>


        </ul>
      </nav>)}
      {asignarComponente()}
    </>
  )
}

export default App