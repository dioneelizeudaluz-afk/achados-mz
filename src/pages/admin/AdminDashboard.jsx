import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <header style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '16px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          Painel Administrativo
        </h1>
      </header>

      <main style={{ padding: '16px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Nenhum documento registado ainda
          </p>
        </div>

        <button
          onClick={() => navigate('/admin')}
          style={{
            marginTop: '16px',
            padding: '12px 24px',
            backgroundColor: '#e5e7eb',
            color: '#374151',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Sair
        </button>
      </main>
    </div>
  )
      }
