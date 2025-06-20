import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Categories = () => {
  const [nombre, setNombre] = useState("")
  const [categorias, setCategorias] = useState([])

  const token = localStorage.getItem("tokenLogin")

  if (!token) {
    toast.error("No estás autenticado. Por favor, inicia sesión.");
    return
  }

  const obtenerCategorias = async () => {
    try {
      const res = await fetch("http://localhost:3001/category/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      setCategorias(data)
    } catch (error) {
      console.error("Error al obtener categorías", error)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  const buttonSubmit = async (e) => {
    e.preventDefault()
    if (!nombre.trim()) return toast.error("Escribe un nombre válido")

    try {
      const res = await fetch("http://localhost:3001/category/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: nombre }),
      })

      if (res.ok) {
        const nuevaCategoria = await res.json()
        setCategorias([...categorias, nuevaCategoria])
        setNombre("")
        toast.success("Categoría creada exitosamente")
      } else {
        const err = await res.json()
        toast.error("Error al crear: " + err.message)
      }
    } catch (error) {
      console.error("Error al crear categoría", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Gestión de Categorías</h1>

        <form onSubmit={buttonSubmit} className="bg-white shadow-lg rounded-xl p-6 mb-8">
          <label className="block text-gray-700 text-lg font-semibold mb-2">Nueva categoría</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Compras"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Crear categoría
          </button>
          <p className="text-sm text-gray-500 mt-2">Agrega una nueva categoría a la lista</p>
        </form>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Categorías</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <div
                  key={cat._id}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition"
                >
                  <span className="text-lg font-medium text-gray-700">{cat.name}</span>
                  <span className="text-sm text-purple-500">#{cat._id.slice(-4)}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">No hay categorías aún</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
