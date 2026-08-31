import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)

  const handleSearch = () => {
    setSearched(true)
    setResults([])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Procurar Documento</h1>
      
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Nome ou numero do documento"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-lg"
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-700 text-white py-3 rounded-lg"
      >
        Pesquisar
      </button>

      {searched && results.length === 0 && (
        <div className="text-center py-8 bg-white rounded-lg">
          <p className="text-gray-500">Nenhum documento encontrado</p>
        </div>
      )}
    </div>
  )
}
