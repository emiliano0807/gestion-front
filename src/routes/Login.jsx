import { useState } from "react";
import ImagenLogin from "../img/login.svg";

const Login = () => {
 const [isRegister,setIsRegister] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-100">
      <form className="w-9/12 h-8/10 bg-white shadow-lg rounded flex">
        <img src={ImagenLogin} className="w-3/6 h-full"/>
          <div className="w-4/6 flex justify-start items-start flex-col p-2">
            <p className="w-full text-end"> {isRegister? "Aún no ": "Ya"} tienes una cuenta?
              <a onClick={()=>setIsRegister(!isRegister)} className=" cursor-pointer ms-1 text-emerald-500">
                {isRegister?"Inicia sesión aqui":"Crea una cuenta aqui."}
              </a>
            </p>
            <h1 className="text-slate-600 text-xl w-full mt-[25%]">
              {isRegister? "Aún no ": "Ya"} tienes una cuenta.</h1>
            <h2 className="text-slate-800 font-bold text-xl w-full mt-2">
              {
                isRegister? "Registrate aqui.": "Inicia sesión aqui."
              }
            </h2>


            <div className="flex flex-col w-full items-start gap-2 my-2">
              <label className="text-slate-700 text-md font-bold">
                Nombre de usuario
              </label>
              <input type="text" required 
              className="border border-slate-500 rounded shadow focus:outline-none text-center"/>
            </div>

            <div className="flex flex-col w-full items-start gap-2 my-2 mb-4">
              <label className="text-slate-700 text-md font-bold">
                Contraseña.
              </label >
              <input type="password" required 
              className="border border-slate-500 rounded shadow focus:outline-none text-center" />
            </div>

            {isRegister && (<div className="flex flex-col w-full items-start gap-2 my-2 mb-4">
              <label className="text-slate-700 text-md font-bold">
                Confirma la contraseña.
              </label >
              <input type="password" required 
              className="border border-slate-500 rounded shadow focus:outline-none text-center" />
            </div>)}

            <button className=" bg-emerald-500 text-white p-2 px-4 rounded hover:shadow hover:bg-emerald-600 cursor-pointer">
              {
                isRegister?"Registrate":"Ingresar"
              }
              </button>
            


          </div>
      </form>
    </div>
  )
}

export default Login
