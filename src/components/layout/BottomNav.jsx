import { useNavigate, useLocation } from 'react-router-dom'
import { Home, Search, PlusCircle, FileText, Printer } from 'lucide-react'

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/search', icon: Search, label: 'Procurar' },
    { path: '/register-found', icon: PlusCircle, label: 'Registar' },
    { path: '/print-documents', icon: Printer, label: 'Imprimir' }
  ]

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '448px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 0',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: isActive ? '#1d4ed8' : '#6b7280'
              }}
            >
              <Icon size={24} />
              <span style={{ fontSize: '12px', fontWeight: '500' }}>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
                }
