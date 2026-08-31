import { useNavigate } from 'react-router-dom'
import { Search, PlusCircle, FileText, Shield, Lock, MapPin, FileCheck } from 'lucide-react'
import Button from '../components/ui/Button'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-6">
        <div className="flex justify-center">
          <Shield className="h-16 w-16 text-blue-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Achados MZ</h1>
        <p className="text-gray-600 text-lg">
          Plataforma de recuperacao de documentos perdidos em Mocambique
        </p>
      </div>

      {/* Main Actions */}
      <div className="space-y-4">
        <Button
          fullWidth
          size="lg"
          onClick={() => navigate('/search')}
          className="flex items-center justify-center gap-2"
        >
          <Search className="h-5 w-5" />
          Procurar Documento
        </Button>

        <Button
          fullWidth
          size="lg"
          variant="secondary"
          onClick={() => navigate('/register-found')}
          className="flex items-center justify-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          Registar Documento Encontrado
        </Button>

        <Button
          fullWidth
          size="lg"
          variant="outline"
          onClick={() => navigate('/register-lost')}
          className="flex items-center justify-center gap-2"
        >
          <FileText className="h-5 w-5" />
          Comunicar Documento Perdido
        </Button>
      </div>

      {/* How It Works */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Como Funciona</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-700 font-bold">1</span>
            </div>
            <p className="text-gray-600">Registe o documento perdido ou encontrado</p>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-700 font-bold">2</span>
            </div>
            <p className="text-gray-600">O sistema procura correspondencias</p>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-700 font-bold">3</span>
            </div>
            <p className="text-gray-600">Receba notificacao quando houver match</p>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Documentos Suportados</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">BI</p>
            <p className="text-xs text-gray-500">Bilhete de Identidade</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">Carta</p>
            <p className="text-xs text-gray-500">Carta de Conducao</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <FileCheck className="h-8 w-8 mx-auto text-blue-700 mb-2" />
            <p className="font-medium">Passaporte</p>
            <p className="text-xs text-gray-500">Documento de Viagem</p>
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Seguranca e Privacidade</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-blue-700" />
            <span className="text-sm text-gray-700">Dados protegidos e mascarados</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-700" />
            <span className="text-sm text-gray-700">Validacao administrativa</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-700" />
            <span className="text-sm text-gray-700">Cobertura nacional</span>
          </div>
        </div>
      </section>
    </div>
  )
              }
