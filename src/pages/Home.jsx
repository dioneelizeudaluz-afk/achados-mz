import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: '#2563eb', 
        fontSize: '32px',
        marginBottom: '10px'
      }}>
        🇲🇿 Achados MZ
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#666',
        marginBottom: '30px'
      }}>
        Recupere seus documentos perdidos
      </p>
      
      <button
        onClick={() => navigate('/register?type=lost')}
        style={{
          width: '100%',
          background: '#2563eb',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          border: 'none',
          fontSize: '16px',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
      >
        😔 Perdi um Documento
      </button>
      
      <button
        onClick={() => navigate('/register?type=found')}
        style={{
          width: '100%',
          background: 'white',
          color: '#2563eb',
          padding: '15px',
          borderRadius: '10px',
          border: '2px solid #2563eb',
          fontSize: '16px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        😊 Encontrei um Documento
      </button>
      
      <button
        onClick={() => navigate('/search')}
        style={{
          width: '100%',
          background: '#f9fafb',
          color: '#333',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        🔍 Pesquisar Documentos
      </button>
    </div>
  )
          }
