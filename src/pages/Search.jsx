import { useState } from 'react'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = () => {
    // Simulação de resultados
    setResults([
      { id: 1, name: 'João Manuel', type: 'BI', province: 'Maputo' },
      { id: 2, name: 'Maria Silva', type: 'Passaporte', province: 'Gaza' }
    ])
  }

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Pesquisar Documentos
      </h1>
      
      <input
        type="text"
        placeholder="Nome ou número do documento"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          fontSize: '16px',
          marginBottom: '10px',
          boxSizing: 'border-box'
        }}
      />
      
      <select style={{
        width: '100%',
        padding: '15px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        fontSize: '16px',
        marginBottom: '20px',
        background: 'white'
      }}>
        <option value="">Todos os tipos</option>
        <option value="BI">Bilhete de Identidade</option>
        <option value="CARTA_CONDUCAO">Carta de Condução</option>
        <option value="PASSAPORTE">Passaporte</option>
      </select>
      
      <button
        onClick={handleSearch}
        style={{
          width: '100%',
          background: '#2563eb',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Pesquisar
      </button>
      
      {results.map(doc => (
        <div key={doc.id} style={{
          background: 'white',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '10px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ margin: '0 0 5px 0' }}>{doc.name}</h3>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            {doc.type} • {doc.province}
          </p>
        </div>
      ))}
    </div>
  )
        }
