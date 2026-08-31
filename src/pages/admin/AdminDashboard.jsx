import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white p-4">
        <h1 className="text-xl font-bold">Painel Administrativo</h1>
      </header>
      
      <main className="p-4">
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-500">Nenhum documento registado ainda</p>
        </div>
        
        <button
          onClick={() => navigate('/admin')}
          className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Sair
        </button>
      </main>
    </div>
  )
}
