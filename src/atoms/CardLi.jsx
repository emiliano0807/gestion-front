const CardLi = ({ color, amount, text, children }) => {
  return (
    <li className={`w-2/8 bg-slate-600 rounded-lg p-4 flex items-center justify-between mb-4 text-white`}>
        <div>
            <div className={`text-${color}-600 font-bold text-lg`}>{amount}</div>
            <div className="text-white-700">{text}</div>
        </div>
        <div className={`text-${color}-600 text-2xl`}>
            {children}
        </div>
    </li>
  )
}

export default CardLi