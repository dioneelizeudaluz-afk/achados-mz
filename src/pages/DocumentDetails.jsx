import { useParams, useNavigate } from 'react-router-dom'

export default function DocumentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Detalhes do Documento</h1>
      <p className="text-gray-600">ID: {id}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Voltar
      </button>
    </div>
  )
}
