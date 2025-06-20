import { ArrowDownToLine, ArrowUpToLine } from 'lucide-react';

const TransactionItem = ({ transaction, formatearMoneda, destacado }) => {
  const isIngreso = transaction.type === "ingreso";
  const iconColor = isIngreso ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";

  const fecha = new Date(transaction.date);
  const now = new Date();
  const minutos = Math.round((fecha - now) / (1000 * 60));
  const tiempoRelativo = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

  return (
    <li
      className={`flex justify-between items-center gap-4 p-5 rounded-xl shadow-md bg-white transition-all
        ${destacado ? "border-4 border-yellow-400" : "border border-gray-200"}`}
    >
      {/* Icono */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${iconColor}`}>
        {isIngreso ? <ArrowUpToLine size={24} /> : <ArrowDownToLine size={24} />}
      </div>

      {/* Información */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{transaction.description}</h3>
        <p className="text-sm text-gray-500">{transaction.category?.name || "Sin categoría"}</p>
      </div>

      {/* Monto y fecha */}
      <div className="text-right">
        <span className={`block font-bold text-lg ${isIngreso ? "text-green-600" : "text-red-600"}`}>
          {formatearMoneda(transaction.amount)}
        </span>
        <p className="text-sm text-gray-400">{tiempoRelativo.format(minutos, 'minute')}</p>
      </div>
    </li>
  );
};

export default TransactionItem;
