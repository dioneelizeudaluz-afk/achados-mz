import { useNavigate } from 'react-router-dom'
import { Search, PlusCircle, FileText, Shield, Lock, MapPin, FileCheck } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div className="text-center py-6">
        <Shield className="h-16 w-16 mx-auto text-blue-700 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Achados MZ</h1>
        <p className="text-gray-600 text-lg mt-2">
          Plataforma de recuperacao de documentos perdidos
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => navigate('/search')}
          className="w-full bg-blue-700 text-white py-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Search className="h-5 w-5" />
          Procurar Documento
        </button>

        <button
          onClick={() => navigate('/register-found')}
          className="w-full bg-white text-blue-700 border-2 border-blue-700 py-4 rounded-lg flex items-center justify-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          Registar Documento Encontrado
        </button>

        <button
          onClick={() => navigate('/register-lost')}
          className="w-full bg-gray-100 text-gray-700 py-4 rounded-lg flex items-center justify-center gap-2"
        >
          <FileText className="h-5 w-5" />
          Comunicar Documento Perdido
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Documentos Suportados</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">BI</p>
          </div>
          <div className="text-center">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">Carta</p>
          </div>
          <div className="text-center">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">Passaporte</p>
          </div>
        </div>
      </div>
    </div>
  )
}
