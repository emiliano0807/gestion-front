
const Categories = () => {
  return (
    <section className="w-9/10 flex flex-col items-center min-h-screen">

      <form className="w-fit p-3 flex flex-col items-end ">  
        <h1 className="w-full text-center text-3xl text-slate-500 mb-4">Categorias</h1>
        
        <div className="flex flex-col">
          <label className="text-slate-900 font-bold mb-2">
            Nombre de la categoria
          </label>
          <input className="border border-slate-500 focus:outline-none focus:border-pink-900 w-[300px]" type="text" placeholder="Gastos de casa" required/>
        </div>
        
        <button className="w-fit bg-slate-700 text-white px-3 py-1 rounded my-2 cursor-pointer hover:bg-pink-900">Agregar</button>
        <p className="w-full text-center text-sm text-gray-400">Ingresa una categoria nueva</p>
      </form>

      <ul className=" shadow bg-gray-50 w-8/10 p-2">
        <li className="w-full px-2 border-b border-b-slate-900 text-xl text-slate-900 my-2">NombreCategoriaEjemplo</li>
        <li className="w-full px-2 border-b border-b-slate-900 text-xl text-slate-900 my-2">NombreCategoriaEjemplo</li>
        <li className="w-full px-2 border-b border-b-slate-900 text-xl text-slate-900 my-2">NombreCategoriaEjemplo</li>
        <li className="w-full px-2 border-b border-b-slate-900 text-xl text-slate-900 my-2">NombreCategoriaEjemplo</li>
        <li className="w-full px-2 border-b border-b-slate-900 text-xl text-slate-900 my-2">NombreCategoriaEjemplo</li>

      </ul>
      
      </section>
  )
}

export default Categories