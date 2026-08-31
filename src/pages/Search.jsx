import { useState } from 'react'
import { Search as SearchIcon, Filter, MapPin, FileText, Calendar } from 'lucide-react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { PROVINCES, DOCUMENT_TYPES } from '../lib/constants'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Badge from '../components/ui/Badge'

export default function Search() {
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [filters, setFilters] = useState({
    query: '',
    documentType: '',
    province: '',
    listingType: ''
  })

  const handleSearch = async () => {
    if (!isSupabaseConfigured()) {
      alert('Base de dados nao configurada. Verifique as variaveis de ambiente.')
      return
    }

    setLoading(true)
    setSearched(true)

    try {
      let query = supabase
        .from('documents')
        .select('*')
        .eq('status', 'APROVADO')

      if (filters.documentType) {
        query = query.eq('document_type', filters.documentType)
      }
      if (filters.province) {
        query = query.eq('province', filters.province)
      }
      if (filters.listingType) {
        query = query.eq('listing_type', filters.listingType)
      }
      if (filters.query) {
        query = query.or(`full_name.ilike.%${filters.query}%,document_number.ilike.%${filters.query}%`)
      }

      const { data, error } = await query.order('created_at', { ascending: false })

      if (error) throw error
      setResults(data || [])
    } catch (error) {
      console.error('Erro na pesquisa:', error.message)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const maskDocumentNumber = (number) => {
    if (!number) return ''
    if (number.length <= 4) return '****'
    return `${number.slice(0, 2)}****${number.slice(-2)}`
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Procurar Documento</h1>

      <div className="space-y-3">
        <Input
          placeholder="Nome ou numero do documento"
          icon={SearchIcon}
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
        />

        <Button
          fullWidth
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtros Avancados
        </Button>

        {showFilters && (
          <div className="bg-white rounded-lg p-4 space-y-3 shadow-sm">
            <Select
              label="Tipo de Documento"
              options={DOCUMENT_TYPES}
              value={filters.documentType}
              onChange={(e) => setFilters({ ...filters, documentType: e.target.value })}
            />
            <Select
              label="Provincia"
              options={PROVINCES.map(p => ({ value: p, label: p }))}
              value={filters.province}
              onChange={(e) => setFilters({ ...filters, province: e.target.value })}
            />
            <Select
              label="Tipo de Registo"
              options={[
                { value: 'PERDIDO', label: 'Perdido' },
                { value: 'ACHADO', label: 'Encontrado' }
              ]}
              value={filters.listingType}
              onChange={(e) => setFilters({ ...filters, listingType: e.target.value })}
            />
          </div>
        )}

        <Button
          fullWidth
          onClick={handleSearch}
          loading={loading}
        >
          Pesquisar
        </Button>
      </div>

      {loading && (
        <div className="text-center py-8">
          <p className="text-gray-500">A pesquisar...</p>
        </div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-8 bg-white rounded-lg">
          <SearchIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="font-medium text-gray-700">Nenhum documento encontrado</h3>
          <p className="text-sm text-gray-500 mt-2">
            Nao encontramos correspondencias para a sua pesquisa.
          </p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-3">
          {results.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <FileText className="h-8 w-8 text-blue-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">{doc.full_name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {doc.document_type} - {maskDocumentNumber(doc.document_number)}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {doc.province}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(doc.created_at).toLocaleDateString('pt-MZ')}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge status={doc.listing_type}>
                  {doc.listing_type === 'ACHADO' ? 'Encontrado' : 'Perdido'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
    }
