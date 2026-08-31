import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{ width: '100%', maxWidth: '384px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Shield size={64} color="#1d4ed8" style={{ margin: '0 auto 16px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
            Painel Administrativo
          </h1>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); navigate('/admin/dashboard') }}
          style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              fontSize: '16px',
              marginBottom: '12px',
              boxSizing: 'border-box'
            }}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              fontSize: '16px',
              marginBottom: '12px',
              boxSizing: 'border-box'
            }}
            required
          />
          <button
            type="submit"
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
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
            }
