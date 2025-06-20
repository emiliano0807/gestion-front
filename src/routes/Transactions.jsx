import { useEffect, useState } from 'react'
import TransactionItem from '../atoms/TransactionItem'
import toast from 'react-hot-toast'

const Transaction = () => {
  const [transactions, setTransactions] = useState([])
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("ingreso")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const token = localStorage.getItem("tokenLogin")
  if (!token) {
    toast.error("No estás autenticado. Por favor, inicia sesión.");
    return
  }

  const getTransactions = async () => {
    try {
      const res = await fetch("http://localhost:3001/transaction", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setTransactions(data)
    } catch (err) {
      console.error("Error al cargar transacciones", err)
    }
  }

  const getCategories = async () => {
    try {
      const res = await fetch("http://localhost:3001/category/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setCategories(data)
      if (data.length > 0) setCategory(data[0]._id)
    } catch (err) {
      console.error("Error al cargar categorías", err)
    }
  }

  useEffect(() => {
    getTransactions()
    getCategories()
  }, [])

  const buttonSubmit = async (e) => {
    e.preventDefault()
    if (!description.trim() || !amount || !type || !category) {
      toast.error("Completa todos los campos")
      return
    }
    if (isNaN(amount) || Number(amount) <= 0) {
      toast.error("El monto debe ser un número positivo")
      return
    }
    if (description.length < 3) {
      toast.error("La descripción debe tener al menos 3 caracteres")
      return
    }

    try {
      const res = await fetch("http://localhost:3001/transaction/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description, amount: Number(amount), type, category }),
      })

      if (res.ok) {
        const nueva = await res.json()
        setTransactions([...transactions, nueva])
        setDescription("")
        setAmount("")
        setType("ingreso")
        setCategory(categories[0]?._id || "")
        toast.success("Transacción agregada exitosamente")
      } else {
        const err = await res.json()
        toast.error("Error al agregar: " + err.message)
      }
    } catch (err) {
      toast.error("Error al agregar transacción", err)
    }
  }

  const formatearMoneda = (cantidad) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(cantidad);
  }

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-white p-10">
      <h1 className="text-center text-4xl font-extrabold text-purple-700 mb-10">Registro de Transacciones</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Formulario */}
        <form onSubmit={buttonSubmit} className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Agregar nueva transacción</h2>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1">Descripción</label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Ej: Compra de materiales"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1">Monto</label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="2000"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1">Tipo</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option value="ingreso">Ingreso</option>
              <option value="egreso">Egreso</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1">Categoría</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              {categories.map(cat => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
            Agregar transacción
          </button>

          <p className="text-center text-sm text-gray-400 mt-3">Todos los campos son obligatorios</p>
        </form>

        {/* Lista de transacciones */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Transacciones recientes</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar por descripción o categoría..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <ul className="max-h-96 overflow-y-auto divide-y divide-gray-200">
            {filteredTransactions.map((mov, i) => (
              <TransactionItem
                key={i}
                transaction={mov}
                formatearMoneda={formatearMoneda}
                destacado={searchTerm.length > 0}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Transaction
