import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function RegisterFound() {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    document_type: '',
    full_name: '',
    province: '',
    contact_phone: ''
  })

  const inputStyle = {
    width: '100%',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    marginBottom: '12px',
    boxSizing: 'border-box'
  }

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 16px' }} />
        <h2 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>
          Documento Registado
        </h2>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>
          Obrigado por ajudar!
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '24px',
            padding: '12px 24px',
            backgroundColor: '#1d4ed8',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Voltar ao Inicio
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
        Registar Documento Encontrado
      </h1>

      <form
        onSubmit={(e) => { e.preventDefault(); setSuccess(true) }}
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}
      >
        <select style={inputStyle} required>
          <option value="">Tipo de Documento</option>
          <option value="BI">BI</option>
          <option value="CARTA_CONDUCAO">Carta de Conducao</option>
          <option value="PASSAPORTE">Passaporte</option>
        </select>

        <input type="text" placeholder="Nome no documento" style={inputStyle} required />
        <input type="text" placeholder="Provincia" style={inputStyle} required />
        <input type="text" placeholder="Seu contacto" style={inputStyle} required />

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
          Registar Documento
        </button>
      </form>
    </div>
  )
            }
