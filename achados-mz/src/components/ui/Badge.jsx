export default function Badge({ status, children }) {
  const statusStyles = {
    PENDENTE: 'bg-yellow-100 text-yellow-800',
    APROVADO: 'bg-green-100 text-green-800',
    ENCONTRADO: 'bg-blue-100 text-blue-800',
    DEVOLVIDO: 'bg-purple-100 text-purple-800',
    REJEITADO: 'bg-red-100 text-red-800',
    REMOVIDO: 'bg-gray-100 text-gray-600'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status] || 'bg-gray-100 text-gray-600'}`}>
      {children}
    </span>
  )
}
