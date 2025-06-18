const NavLi = ({setHook, children}) => {
  return (
    <li>
        <button onClick={()=>setHook("/")}className="flex grap-2 hover:text-emerald-400">
            {children}
        </button>
    </li>
  )
}

export default NavLi