const CardLi = ({ color, amount, text, children }) => {
  return (
    <div className=" w-2/8 shadow-lg rounded bg-slate-700 p-4 text-white">
            <h2 className={`flex gap-2 text-${color}-400 text-3xl`} >
                 {children}{amount}
            </h2>
            <p className=" text-end text-slate-200 ">{text}</p>
        </div>
  )
}

export default CardLi