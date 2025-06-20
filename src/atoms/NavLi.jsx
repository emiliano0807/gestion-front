const NavLi = ({ setHook, children }) => {
  return (
    <li>
      <button
        onClick={() => setHook()}
        className="flex items-center gap-2 w-full px-4 py-2 rounded-lg text-left hover:bg-emerald-100 text-slate-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
      >
        {children}
      </button>
    </li>
  );
};

export default NavLi;
