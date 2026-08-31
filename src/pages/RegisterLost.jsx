import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function RegisterLost() {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    document_type: '',
    full_name: '',
    province: '',
    contact_phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
        <h2 className="text-xl font-semibold">Documento Registado</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Voltar ao Inicio
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Comunicar Documento Perdido</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg p-6">
        <select
          value={formData.document_type}
          onChange={(e) => setFormData({ ...formData, document_type: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
          required
        >
          <option value="">Tipo de Documento</option>
          <option value="BI">BI</option>
          <option value="CARTA_CONDUCAO">Carta de Conducao</option>
          <option value="PASSAPORTE">Passaporte</option>
        </select>

        <input
          type="text"
          placeholder="Nome no documento"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Provincia"
          value={formData.province}
          onChange={(e) => setFormData({ ...formData, province: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Seu contacto"
          value={formData.contact_phone}
          onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg"
        >
          Registar Documento Perdido
        </button>
      </form>
    </div>
  )
          }
