import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { FileText, CheckCircle, Clock, AlertTriangle, LogOut } from 'lucide-react'
import Badge from '../../components/ui/Badge'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [documents, setDocuments] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    found: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setDocuments(data || [])
      
      const pending = data?.filter(d => d.status === 'PENDENTE').length || 0
      const approved = data?.filter(d => d.status === 'APROVADO').length || 0
      const found = data?.filter(d => d.status === 'ENCONTRADO' || d.status === 'DEVOLVIDO').length || 0

      setStats({
        total: data?.length || 0,
        pending,
        approved,
        found
      })
    } catch (error) {
      console.error('Erro:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('documents')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) throw error
      fetchData()
    } catch (error) {
      console.error('Erro:', error.message)
      alert('Erro ao atualizar estado')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja remover este registo?')) return

    try {
      const { error } = await supabase
        .from('documents')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchData()
    } catch (error) {
      console.error('Erro:', error.message)
      alert('Erro ao remover registo')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Painel Administrativo</h1>
          <button onClick={handleLogout} className="flex items-center gap-1 text-sm">
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <FileText className="h-6 w-6 mx-auto text-blue-700 mb-2" />
            <p className="text-2xl font-bold">{stats.total}</p>
            <p className="text-xs text-gray-600">Total</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <Clock className="h-6 w-6 mx-auto text-yellow-600 mb-2" />
            <p className="text-2xl font-bold">{stats.pending}</p>
            <p className="text-xs text-gray-600">Pendentes</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <CheckCircle className="h-6 w-6 mx-auto text-green-600 mb-2" />
            <p className="text-2xl font-bold">{stats.approved}</p>
            <p className="text-xs text-gray-600">Aprovados</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <AlertTriangle className="h-6 w-6 mx-auto text-purple-600 mb-2" />
            <p className="text-2xl font-bold">{stats.found}</p>
            <p className="text-xs text-gray-600">Encontrados</p>
          </div>
        </div>

        {/* Documents List */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Documentos Registados</h2>
          
          {documents.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-500">Nenhum documento registado ainda</p>
            </div>
          ) : (
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{doc.full_name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {doc.document_type} - {doc.listing_type}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {doc.province} - {new Date(doc.created_at).toLocaleDateString('pt-MZ')}
                      </p>
                    </div>
                    <Badge status={doc.status}>
                      {doc.status}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {doc.status === 'PENDENTE' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(doc.id, 'APROVADO')}
                          className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                        >
                          Aprovar
                        </button>
                        <button
                          onClick={() => handleStatusChange(doc.id, 'REJEITADO')}
                          className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                        >
                          Rejeitar
                        </button>
                      </>
                    )}
                    {doc.status === 'APROVADO' && (
                      <button
                        onClick={() => handleStatusChange(doc.id, 'ENCONTRADO')}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                      >
                        Marcar Encontrado
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
    }
