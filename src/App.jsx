import { ArrowDownUp, ChartNetwork, LogOut, SquareStack } from "lucide-react";
import NavLi from "./atoms/NavLi";
import useCustomRoute from "./hooks/useCustomRoute";
import { useState, useEffect } from "react";
import Login from "./routes/Login";

const App = () => {
  const { setRuta, asignarComponente } = useCustomRoute();
  const [navVisibility, setNavVisiblity] = useState(false);

  useEffect(() => {
    const tokenLogin = localStorage.getItem("tokenLogin");
    if (tokenLogin && !navVisibility) {
      setNavVisiblity(true);
      setRuta("/");
    }
  }, [navVisibility, setRuta]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {navVisibility && (
        <aside className="w-64 bg-white shadow-xl flex flex-col justify-between p-6 fixed inset-y-0 left-0 z-10 max-md:w-full max-md:flex-row max-md:items-center max-md:justify-between max-md:h-20 max-md:inset-y-auto max-md:inset-x-0">
          <nav className="flex flex-col gap-4 max-md:flex-row max-md:items-center">
            <NavLi setHook={() => setRuta("/")}>
              <ChartNetwork className="mr-2" /> Dashboard
            </NavLi>
            <NavLi setHook={() => setRuta("/categories")}>
              <SquareStack className="mr-2" /> Categories
            </NavLi>
            <NavLi setHook={() => setRuta("/transaction")}>
              <ArrowDownUp className="mr-2" /> Transactions
            </NavLi>
          </nav>
          <div className="max-md:hidden mt-10">
            <NavLi
              setHook={() => {
                setNavVisiblity(false);
                setRuta("/login");
                localStorage.removeItem("tokenLogin");
              }}
            >
              <LogOut className="mr-2" /> Logout
            </NavLi>
          </div>
        </aside>
      )}

      {/* Contenido principal */}
      <main className={`flex-1 ml-64 p-6 transition-all duration-300 max-md:ml-0 ${!navVisibility ? "w-full" : ""}`}>
        {!navVisibility ? (
          <Login setNavVisiblity={setNavVisiblity} setRuta={setRuta} />
        ) : (
          asignarComponente()
        )}
      </main>
    </div>
  );
};

export default App;
