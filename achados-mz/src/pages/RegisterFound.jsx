import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FileText, MapPin, User, Phone, Calendar, Upload, CheckCircle } from 'lucide-react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { PROVINCES, DOCUMENT_TYPES } from '../lib/constants'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'

export default function RegisterFound() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    document_type: '',
    full_name: '',
    document_number: '',
    province: '',
    location_details: '',
    contact_phone: ''
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.document_type) newErrors.document_type = 'Selecione o tipo de documento'
    if (!formData.full_name || formData.full_name.length < 3) newErrors.full_name = 'Nome invalido'
    if (!formData.province) newErrors.province = 'Selecione a provincia'
    if (!formData.contact_phone) newErrors.contact_phone = 'Contacto necessario'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!isSupabaseConfigured()) {
      alert('Base de dados nao configurada')
      return
    }

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('documents')
        .insert({
          ...formData,
          listing_type: 'ACHADO',
          status: 'PENDENTE'
        })
        .select()
        .single()

      if (error) throw error
      setSuccess(true)
    } catch (error) {
      console.error('Erro ao registar:', error.message)
      alert('Erro ao registar documento. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900">Documento Registado</h2>
        <p className="text-gray-600 mt-2">
          Obrigado por ajudar. O registo sera validado pela equipa.
        </p>
        <Button
          className="mt-6"
          onClick={() => navigate('/')}
        >
          Voltar ao Inicio
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Registar Documento Encontrado</h1>
      <p className="text-gray-600">
        Encontrou um documento? Registe aqui para ajudar a devolver ao proprietario.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg p-6 shadow-sm">
        <Select
          label="Tipo de Documento"
          required
          options={DOCUMENT_TYPES}
          value={formData.document_type}
          onChange={(e) => setFormData({ ...formData, document_type: e.target.value })}
          error={errors.document_type}
        />

        <Input
          label="Nome no Documento"
          required
          icon={User}
          placeholder="Nome completo como esta no documento"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          error={errors.full_name}
        />

        <Input
          label="Numero do Documento"
          icon={FileText}
          placeholder="Numero de identificacao"
          value={formData.document_number}
          onChange={(e) => setFormData({ ...formData, document_number: e.target.value })}
        />

        <Select
          label="Provincia"
          required
          options={PROVINCES.map(p => ({ value: p, label: p }))}
          value={formData.province}
          onChange={(e) => setFormData({ ...formData, province: e.target.value })}
          error={errors.province}
        />

        <Input
          label="Local onde encontrou"
          icon={MapPin}
          placeholder="Descreva o local"
          value={formData.location_details}
          onChange={(e) => setFormData({ ...formData, location_details: e.target.value })}
        />

        <Input
          label="Seu Contacto"
          required
          icon={Phone}
          placeholder="Para o proprietario poder contactar"
          value={formData.contact_phone}
          onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
          error={errors.contact_phone}
        />

        <Button
          type="submit"
          fullWidth
          loading={loading}
        >
          Registar Documento
        </Button>
      </form>
    </div>
  )
      }
