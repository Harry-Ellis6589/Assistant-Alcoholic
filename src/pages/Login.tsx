import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '@services/authService'
import { useAuthStore } from '@store/authStore'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { setUser, setLoading, setError } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErrorLocal] = useState<string | null>(null)
  const [isLoading, setIsLoadingLocal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoadingLocal(true)
    setErrorLocal(null)

    try {
      const { data, error } = await authService.signIn(email, password)
      if (error) throw error
      if (data.user) {
        setUser(data.user as any)
        navigate('/')
      }
    } catch (err: any) {
      setErrorLocal(err.message)
      setError(err.message)
    } finally {
      setIsLoadingLocal(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glassmorphism p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-primary-500 text-center mb-2">🍹</h1>
          <h2 className="text-2xl font-bold text-dark-50 text-center mb-1">Assistant Alcoholic</h2>
          <p className="text-dark-300 text-center mb-8">Track your drinks, discover cocktails</p>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full mt-6 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-dark-300 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-500 hover:text-primary-400 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
