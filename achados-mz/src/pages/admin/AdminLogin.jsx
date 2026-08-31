import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { Shield, Lock, User } from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error

      // Verificar se e admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', data.user.id)
        .single()

      if (profile?.is_admin) {
        navigate('/admin/dashboard')
      } else {
        setError('Acesso negado. Utilizador nao autorizado.')
        await supabase.auth.signOut()
      }
    } catch (error) {
      setError('Email ou senha invalidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Shield className="h-16 w-16 mx-auto text-blue-700 mb-4" />
          <h1 className="text-2xl font-bold">Painel Administrativo</h1>
          <p className="text-gray-600 mt-2">Acesso restrito</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-lg p-6 shadow-sm space-y-4">
          <Input
            label="Email"
            icon={User}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Senha"
            icon={Lock}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <Button
            type="submit"
            fullWidth
            loading={loading}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
          }
