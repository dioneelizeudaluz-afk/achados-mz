import { useNavigate } from 'react-router-dom'
import { Search, PlusCircle, FileText, Shield, FileCheck } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    border: 'none'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <Shield size={64} color="#1d4ed8" style={{ margin: '0 auto 16px' }} />
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
          Achados MZ
        </h1>
        <p style={{ fontSize: '18px', color: '#6b7280', marginTop: '8px' }}>
          Plataforma de recuperacao de documentos perdidos
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={() => navigate('/search')}
          style={{ ...buttonStyle, backgroundColor: '#1d4ed8', color: 'white' }}
        >
          <Search size={20} />
          Procurar Documento
        </button>

        <button
          onClick={() => navigate('/register-found')}
          style={{ 
            ...buttonStyle, 
            backgroundColor: 'white', 
            color: '#1d4ed8',
            border: '2px solid #1d4ed8'
          }}
        >
          <PlusCircle size={20} />
          Registar Documento Encontrado
        </button>

        <button
          onClick={() => navigate('/register-lost')}
          style={{ ...buttonStyle, backgroundColor: '#e5e7eb', color: '#374151' }}
        >
          <FileText size={20} />
          Comunicar Documento Perdido
        </button>
      </div>

      {/* Document Types */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          Documentos Suportados
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          textAlign: 'center'
        }}>
          <div>
            <FileCheck size={32} color="#1d4ed8" style={{ margin: '0 auto 8px' }} />
            <p style={{ fontWeight: '500', margin: 0 }}>BI</p>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Bilhete de Identidade</p>
          </div>
          <div>
            <FileCheck size={32} color="#1d4ed8" style={{ margin: '0 auto 8px' }} />
            <p style={{ fontWeight: '500', margin: 0 }}>Carta</p>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Carta de Conducao</p>
          </div>
          <div>
            <FileCheck size={32} color="#1d4ed8" style={{ margin: '0 auto 8px' }} />
            <p style={{ fontWeight: '500', margin: 0 }}>Passaporte</p>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Documento de Viagem</p>
          </div>
        </div>
      </div>
    </div>
  )
        }
