import { ArrowDown, ArrowUp } from "lucide-react";
const TransactionItem = ({transaction}) => {
    const color = transaction.type == "ingreso" ? "emerald" : "rose";
  return (
     <li className={`bg-slate-600 flex text-${color}-600 justify-between px-2`}>
          <div className="flex">
            {transaction.type=="ingreso" ? (<ArrowUp/>):(<ArrowDown/>)}
            <div className="text-white mx-4 text-start">
              <h3 className="text-xl font-bold mb-1">{transaction.description}</h3>
              <small className="text-amber-300 text-sm">{transaction.categoryName}</small>
            </div>
          </div>

            <div className="text-white text-end">
              <p><span className={`text-2xl text-${color}-600 font-bold`}>${transaction.amount} MXN</span></p>
              <p className="text-cyan-300">{transaction.date}</p>
            </div>
          </li>
  )
}

export default TransactionItem