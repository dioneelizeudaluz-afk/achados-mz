import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
        Procurar Documento
      </h1>

      <div style={{ position: 'relative' }}>
        <SearchIcon 
          size={20} 
          color="#9ca3af"
          style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Nome ou numero do documento"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 16px 16px 40px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <button
        onClick={() => setSearched(true)}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: '#1d4ed8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer'
        }}
      >
        Pesquisar
      </button>

      {searched && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Nenhum documento encontrado
          </p>
        </div>
      )}
    </div>
  )
            }
