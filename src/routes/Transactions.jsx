import TransactionItem from "../atoms/TransactionItem";
const Transactions = () => {

  const transactionsList = [
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
    <section className="w-9/10 flex flex-col items-center min-h-screen" >
      <form className="w-fit p-3 flex flex-col items-end ">
        <h1 className="w-full text-center text-3xl text-slate-500 mb-4">Movimientos</h1>

        <div className="flex flex-col w-full">
          <label className="text-slate-900 font-bold mb-2" >
            Descripción
          </label>
          <textarea rows={2} required className="w-full border border-slate-500 focus:outline-none focus:border-pink-900" ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-slate-900 font-bold mb-2">
            Monto a registrar
          </label>
          <input
            className="border border-slate-500 focus:outline-none focus:border-pink-900 w-[300px]"
            type="number"
            placeholder="3 000"
            required />
        </div>

        <div className="flex flex-col">
          <label className="text-slate-900 font-bold mb-2">
            Tipo de movimiento
          </label>
          <select
            className="border border-slate-500 focus:outline-none focus:border-pink-900 w-[300px]"
            required>
            <option value="ingreso" >Ingreso</option>
            <option value="egreso" >Egreso</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-slate-900 font-bold mb-2">
            Categoria
          </label>
          <select
            className="border border-slate-500 focus:outline-none focus:border-pink-900 w-[300px]"
            required>
            <option value="1">categoria 1</option>
            <option value="2">categoria 2</option>
            <option value="3">categoria 3</option>
          </select>
        </div>

        <button className="w-fit bg-slate-700 text-white px-3 py-1 rounded my-2 cursor-pointer hover:bg-pink-900">Agregar</button>
        <p className="w-full text-center text-sm text-gray-400">Ingresa movimiento nuevo</p>
      </form>
      <div className="w-full" >
        <form className="w-full flex justify-end">
          <input type="text" placeholder="Buscar..."
            className="border-b border-b-slate-500 text-center"
          />
        </form>
        <ul className="mt-3 bg-slate-700 text-white shadow">
            {transactionsList.map((movimiento,posicionArreglo)=>{
                return (<TransactionItem  transaction={movimiento} 
                  key={posicionArreglo} />)
            })}
        </ul>
      </div>
    </section>
  )
}

export default Transactions