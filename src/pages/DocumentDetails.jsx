import { useParams, useNavigate } from 'react-router-dom'

export default function DocumentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
        Detalhes do Documento
      </h1>
      <p style={{ color: '#6b7280', margin: 0 }}>ID: {id}</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '12px 24px',
          backgroundColor: '#1d4ed8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Voltar
      </button>
    </div>
  )
          }
