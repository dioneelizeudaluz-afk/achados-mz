import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header style={{
      backgroundColor: '#1d4ed8',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '448px',
        margin: '0 auto',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          <Shield size={24} />
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Achados MZ</span>
        </button>
      </div>
    </header>
  )
            }
