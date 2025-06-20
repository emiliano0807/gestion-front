const CardLi = ({ color, amount, text, children }) => {
  const colorClasses = {
    1: "text-emerald-400",
    2: "text-rose-400",
    3: "text-sky-400",
    4: "text-amber-400",
    5: "text-white",
  };

  const colorA = colorClasses[color] || "text-white";

  const mostrarMonto =
    typeof amount === "number"
      ? new Intl.NumberFormat("es-MX", {
          style: "currency",
          currency: "MXN",
          minimumFractionDigits: 2,
        }).format(amount)
      : amount || "$0.00"; // fallback por si viene vacío

  return (
    <div className="w-48 h-28 shadow-lg rounded-xl bg-slate-700 p-4 text-white flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className={`text-3xl ${colorA}`}>{children}</div>
        <div className={`text-xl font-bold ${colorA}`}>{mostrarMonto}</div>
      </div>
      <p className="text-end text-sm text-slate-300">{text}</p>
    </div>
  );
};

export default CardLi;
