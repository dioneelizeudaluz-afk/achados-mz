import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') === 'found' ? 'ACHADO' : 'PERDIDO'
  
  const [step, setStep] = useState(1)
  const [documentType, setDocumentType] = useState('')
  const [fullName, setFullName] = useState('')
  const [documentNumber, setDocumentNumber] = useState('')
  const [province, setProvince] = useState('')

  const handleSubmit = () => {
    alert('✅ Documento registado com sucesso!')
    navigate('/')
  }

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box'
  }

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '10px',
    border: '2px solid #2563eb',
    background: 'white',
    color: '#2563eb',
    fontSize: '16px',
    cursor: 'pointer'
  }

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        {type === 'ACHADO' ? '😊 Encontrei um Documento' : '😔 Perdi um Documento'}
      </h1>
      
      {/* Progresso */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '30px',
        justifyContent: 'center'
      }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            background: step >= i ? '#2563eb' : '#ccc',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            {i}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2 style={{ marginBottom: '15px' }}>Tipo de Documento</h2>
          <button onClick={() => { setDocumentType('BI'); setStep(2) }} style={buttonStyle}>
            🪪 Bilhete de Identidade
          </button>
          <button onClick={() => { setDocumentType('CARTA_CONDUCAO'); setStep(2) }} style={buttonStyle}>
            🚗 Carta de Condução
          </button>
          <button onClick={() => { setDocumentType('PASSAPORTE'); setStep(2) }} style={buttonStyle}>
            🛂 Passaporte
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 style={{ marginBottom: '15px' }}>Dados do Documento</h2>
          <input
            type="text"
            placeholder="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Número do documento"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.target.value)}
            style={inputStyle}
          />
          <button
            onClick={() => setStep(3)}
            style={{
              ...buttonStyle,
              background: '#2563eb',
              color: 'white'
            }}
          >
            Continuar
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 style={{ marginBottom: '15px' }}>Localização</h2>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            style={inputStyle}
          >
            <option value="">Selecione a província</option>
            <option value="Maputo">Maputo</option>
            <option value="Gaza">Gaza</option>
            <option value="Sofala">Sofala</option>
            <option value="Inhambane">Inhambane</option>
            <option value="Manica">Manica</option>
            <option value="Tete">Tete</option>
            <option value="Zambezia">Zambezia</option>
            <option value="Nampula">Nampula</option>
            <option value="Cabo Delgado">Cabo Delgado</option>
            <option value="Niassa">Niassa</option>
          </select>
          <button
            onClick={handleSubmit}
            style={{
              ...buttonStyle,
              background: '#2563eb',
              color: 'white'
            }}
          >
            ✅ Registar Documento
          </button>
        </div>
      )}
    </div>
  )
      }
