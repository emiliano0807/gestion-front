import { ArrowDown, ArrowLeftRight, ArrowUp, BadgeDollarSign, Blocks, ChartNoAxesCombined } from "lucide-react";
import { useCustomRoute } from "../hooks/useCustomRoute"
import NavLi from "../atoms/NavLi";
import FlashCard from "../atoms/CardLi";
import TransactionItem from "../atoms/TransactionItem";

const Dasboard = () => {


    const transactions = [
        {
            description:"Pago de nomina",
            categoryName:"Trabajo",
            type:"ingreso",
            date:"03/06/2025",
            amount:"10000"
        },
        {
            description:"Compra de Smart Tv",
            categoryName:"electronicos",
            type:"egreso",
            date:"01/06/2025",
            amount:"6000"
        },
        {
            description:"Pago de nomina",
            categoryName:"Trabajo",
            type:"ingreso",
            date:"03/06/2025",
            amount:"10000"
        },
        {
            description:"Compra de Smart Tv",
            categoryName:"electronicos",
            type:"egreso",
            date:"01/06/2025",
            amount:"6000"
        },
        {
            description:"Pago de nomina",
            categoryName:"Trabajo",
            type:"ingreso",
            date:"03/06/2025",
            amount:"10000"
        },
        {
            description:"Compra de Smart Tv",
            categoryName:"electronicos",
            type:"egreso",
            date:"01/06/2025",
            amount:"6000"
        },
    ];


    return (
        <>
            
            <main className="w-10/12 h-screen text-center flex flex-col items-center">
                <section className="flex gap-4 justify-evenly w-full">
                    <FlashCard color="emerald" amount={"$3000"} text="gastos de ingresos">
                        <ArrowUp />
                    </FlashCard>

                    <FlashCard color="rose" amount={"-$1000"} text="gastos de egreso">
                        <ArrowDown />
                    </FlashCard>

                    <FlashCard color="sky" amount={"$2000"} text="balance de gastos">
                        <BadgeDollarSign />
                    </FlashCard>
                    {/* <h2 className="text-emerald-400 text-3xl">yo</h2> */}
                </section>

                <section className="w-10/12">
                    {/* ultimos 6 gastos */}
                    <h2 className="text-slate-700 text-3xl text-start my-7 " >Ultimos movimientos</h2>
                    <ul className="bg-slate-700 text-white p-2 rounded mt-4 shadow">
                        {
                            transactions.map((item, index)=>{
                                return (<TransactionItem transaction={item} key={index} />)
                            })
                        }
                    </ul>
                    
                </section>
            </main>
        </>
    )
}

export default Dasboard