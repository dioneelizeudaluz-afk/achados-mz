import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Printer, FileText, CreditCard, BookOpen, Shield, Lock } from 'lucide-react'

export default function PrintDocuments() {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const documentTypes = [
    { 
      value: 'BI', 
      label: 'Bilhete de Identidade',
      shortLabel: 'B.I',
      icon: CreditCard,
      description: 'Documento de identificacao nacional'
    },
    { 
      value: 'CARTA_CONDUCAO', 
      label: 'Carta de Conducao',
      shortLabel: 'Carta',
      icon: BookOpen,
      description: 'Licenca de conducao'
    },
    { 
      value: 'PASSAPORTE', 
      label: 'Passaporte',
      shortLabel: 'Passaporte',
      icon: FileText,
      description: 'Documento de viagem internacional'
    }
  ]

  const handleSelectType = (type) => {
    setSelectedType(type)
    setShowPreview(true)
  }

  const handlePrint = () => {
    window.print()
  }

  const selectedDoc = documentTypes.find(d => d.value === selectedType)

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      paddingBottom: '40px'
    }}>
      
      {/* Cabecalho */}
      <div style={{ textAlign: 'center', paddingTop: '16px' }}>
        <img 
          src="/logo-achados-mz.png" 
          alt="Achados MZ"
          style={{ 
            height: '60px', 
            margin: '0 auto 12px',
            display: 'block'
          }}
        />
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#111827',
          margin: 0
        }}>
          Impressao de Documentos
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          marginTop: '8px',
          lineHeight: '1.5'
        }}>
          Imprima uma copia do documento para facilitar a devolucao ao proprietario.
          Os dados pessoais sao protegidos e ocultados automaticamente.
        </p>
      </div>

      {/* Selecao de Tipo */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          color: '#374151',
          margin: 0
        }}>
          Selecione o tipo de documento:
        </h2>

        {documentTypes.map((doc) => {
          const Icon = doc.icon
          const isSelected = selectedType === doc.value

          return (
            <button
              key={doc.value}
              onClick={() => handleSelectType(doc.value)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                backgroundColor: isSelected ? '#eff6ff' : 'white',
                border: isSelected ? '2px solid #1d4ed8' : '2px solid #e5e7eb',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                width: '100%',
                textAlign: 'left'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: isSelected ? '#1d4ed8' : '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon 
                  size={24} 
                  color={isSelected ? 'white' : '#1d4ed8'}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ 
                  fontWeight: '600', 
                  color: '#111827',
                  margin: 0,
                  fontSize: '16px'
                }}>
                  {doc.label}
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#6b7280',
                  margin: '4px 0 0 0'
                }}>
                  {doc.description}
                </p>
              </div>
              {isSelected && (
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#1d4ed8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={14} color="white" />
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Pre-visualizacao */}
      {showPreview && selectedDoc && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#374151',
            marginTop: 0,
            marginBottom: '16px'
          }}>
            Pre-visualizacao
          </h3>

          {/* Mockup do Documento */}
          <div style={{
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            padding: '20px',
            border: '1px dashed #d1d5db',
            marginBottom: '16px'
          }}>
            {/* Cabecalho do documento */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <img 
                src="/logo-achados-mz.png" 
                alt=""
                style={{ height: '30px' }}
              />
              <span style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                {selectedDoc.label}
              </span>
            </div>

            {/* Campos desfocados */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: 'white',
                borderRadius: '6px'
              }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>Nome Completo:</span>
                <span style={{
                  fontSize: '13px',
                  color: 'transparent',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  filter: 'blur(4px)',
                  userSelect: 'none'
                }}>
                  XXXXXXXXXXXX
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: 'white',
                borderRadius: '6px'
              }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>
                  {selectedDoc.value === 'BI' ? 'Numero do BI:' : 
                   selectedDoc.value === 'CARTA_CONDUCAO' ? 'Numero da Carta:' : 
                   'Numero do Passaporte:'}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: 'transparent',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  filter: 'blur(4px)',
                  userSelect: 'none'
                }}>
                  XXXXXXXXXXXX
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: 'white',
                borderRadius: '6px'
              }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>Data de Nascimento:</span>
                <span style={{
                  fontSize: '13px',
                  color: 'transparent',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  filter: 'blur(4px)',
                  userSelect: 'none'
                }}>
                  XXXXXXXXXXXX
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                backgroundColor: 'white',
                borderRadius: '6px'
              }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>Provincia:</span>
                <span style={{
                  fontSize: '13px',
                  color: 'transparent',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '4px',
                  padding: '2px 8px',
                  filter: 'blur(4px)',
                  userSelect: 'none'
                }}>
                  XXXXXXXXXXXX
                </span>
              </div>
            </div>

            {/* Aviso de privacidade */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '16px',
              padding: '8px 12px',
              backgroundColor: '#eff6ff',
              borderRadius: '6px'
            }}>
              <Lock size={14} color="#1d4ed8" />
              <span style={{ fontSize: '12px', color: '#1d4ed8' }}>
                Dados pessoais protegidos
              </span>
            </div>
          </div>

          {/* Botao de Impressao */}
          <button
            onClick={handlePrint}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#1d4ed8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          >
            <Printer size={20} />
            Imprimir Documento Selecionado
          </button>
        </div>
      )}

      {/* Instrucoes */}
      <div style={{
        backgroundColor: '#f9fafb',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: '#374151',
          marginTop: 0,
          marginBottom: '8px'
        }}>
          Como funciona:
        </h3>
        <ol style={{ 
          margin: 0, 
          paddingLeft: '20px',
          fontSize: '13px',
          color: '#6b7280',
          lineHeight: '1.6'
        }}>
          <li>Selecione o tipo de documento encontrado</li>
          <li>Veja a pre-visualizacao com dados protegidos</li>
          <li>Clique em imprimir para gerar uma copia</li>
          <li>Entregue o documento ao proprietario legítimo</li>
        </ol>
      </div>
    </div>
  )
        }
