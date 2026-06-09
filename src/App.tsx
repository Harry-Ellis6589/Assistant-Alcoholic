import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'
import Layout from '@components/Layout'
import Dashboard from '@pages/Dashboard'
import DrinkLogger from '@pages/DrinkLogger'
import DrinkDiscovery from '@pages/DrinkDiscovery'
import CocktailExplorer from '@pages/CocktailExplorer'
import Analytics from '@pages/Analytics'
import Goals from '@pages/Goals'
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import './index.css'

function App() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    )
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<DrinkLogger />} />
          <Route path="/discover" element={<DrinkDiscovery />} />
          <Route path="/cocktails" element={<CocktailExplorer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
