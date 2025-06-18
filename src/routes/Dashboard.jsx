import { ArrowUp, ArrowDown ,ArrowLeftRight, Blocks,BadgeDollarSign, ChartNoAxesCombined, LogOut } from "lucide-react";
import { useCustomRoute } from "../hooks/useCustomRoute";
import NavLi from "../atoms/NavLi";
import CardLi from "../atoms/CardLi";
import TransactionItem from "../atoms/TransactionItem";
import { useState } from "react";
const Dashboard = () => {
  const { setRuta } = useCustomRoute();

  const transactions = [
    {
      description: "Pago de nomina",
      categoryName:"Trabajo",
      type: "ingreso",
      date:"03/06/2025",
      amount: "10000"
    },
    {
      description: "Compra Television",
      categoryName:"Electronicos",
      type: "egreso",
      date:"05/06/2025",
      amount: "6000"
    },
  ];
const [navVisibility, setNavVisibility] = useState(true);
  return (
    <>
    {navVisibility && (<nav className="sm:w-screen md:w-2/12 shadow-rounded bg-slate-600 h-screen fixed left-0 top-0">
      <ul className="m-3 h-full flex lg:flex-col justify-between items-center text-white">
        <div className="sm:flex lg:block sm:gap-3">
          <NavLi setHook={()=>setRuta("/")}>
            <ChartNoAxesCombined/> Dashboard
          </NavLi>

          <NavLi setHook={()=>setRuta("/transaction")}>
            <ArrowLeftRight/> Transaction
          </NavLi>

          <NavLi setHook={()=>setRuta("/categories")}>
            <Blocks /> Categories
          </NavLi>
        </div>
          <NavLi setHook={()=>{setNavVisibility(false); setRuta("/login")}}>
              <LogOut /> LogOut
          </NavLi>
      </ul>
    </nav>)}


    <main className="w-10/12 h-screen text-center flex flex-col items-center">
      <section className="flex gap-4 justify-evenly w-full">

        <CardLi color="emerald" amount={"$3000"} text="Gastos de ingreso">
          <ArrowUp />
        </CardLi>

        <CardLi color="rose" amount={"-$1000"} text="Gastos de egreso">
          <ArrowDown />
        </CardLi>

        <CardLi color="sky" amount={"$2000"} text="Balance">
          <BadgeDollarSign />
        </CardLi>
      </section>

      <section className="w-10/12">
        {/* Ultimos 6 gastos */}
        <h2 className="text-slate-700 text-3xl text-start mt-7">Ultimos Movimientos</h2>
        <ul className="bg-slate-700 text-white p-2 rounded mt-4 shadow">
          {
            transactions.map((item,index)=>{
              return(<TransactionItem transaction={item} key={index}/>)
            })
          }
        </ul>
      </section>
    </main>
    </>
  )
}

export default Dashboard
