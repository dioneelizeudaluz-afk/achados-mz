import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2"
        >
          <Shield className="h-6 w-6" />
          <span className="text-lg font-bold">Achados MZ</span>
        </button>
      </div>
    </header>
  )
    }
