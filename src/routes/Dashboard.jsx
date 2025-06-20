import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowUpToLine, Scale } from 'lucide-react'
import CartIn from '../atoms/CardLi'
import TransactionItem from '../atoms/TransactionItem'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [ingresos, setIngresos] = useState(0);
  const [egresos, setEgresos] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("tokenLogin");
        if (!token) {
          toast.error("No estás autenticado. Por favor, inicia sesión.");
          return
        }

        const response = await fetch("http://localhost:3001/transaction/", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await response.json();
        console.log("Transacciones recibidas:", data);
        data.forEach(t => console.log(t.description, t.type))

        if (response.ok) {
          setTransactions(data);

          const ingresosTotal = data
            .filter(t => t.type === "ingreso")
            .reduce((sum, t) => sum + Number(t.amount), 0);

          const egresosTotal = data
            .filter(t => t.type === "egreso")
            .reduce((sum, t) => sum + Number(t.amount), 0);

          setIngresos(ingresosTotal);
          setEgresos(egresosTotal);
        } else {
          toast.error("Error al obtener transacciones: " + data.message);
        }
      } catch (error) {
        console.error("Error de red al obtener transacciones", error);
      }
    }
    fetchTransactions();
  }, []);

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(cantidad);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-200">
      <header className="bg-white shadow-sm py-5 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700">Panel Financiero</h1>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Tarjetas de resumen */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
<CartIn
  color={1}
  amount={ingresos}
  text={"Total Ingresos"}
>
  <ArrowUpToLine className="text-green-500 w-6 h-6" />
</CartIn>
<CartIn
  color={2}
  amount={egresos}
  text={"Total Egresos"}
>
  <ArrowDownToLine className="text-red-500 w-6 h-6" />
</CartIn>
<CartIn
  color={3}
  amount={ingresos - egresos}
  text={"Balance Neto"}
>
  <Scale className="text-indigo-500 w-6 h-6" />
</CartIn>

        </section>

        {/* Lista de transacciones */}
        <section className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Últimos 6 Movimientos</h2>
          <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {
              transactions.slice(0, 6).map((item, index) => (
                <TransactionItem
                  transaction={item}
                  key={index}
                  formatearMoneda={formatearMoneda}
                />
              ))
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
