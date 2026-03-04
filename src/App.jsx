import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useAuth } from './context/AuthContext'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'

export default function App() {
  const { user } = useAuth();

  return (
    <div className="app">
      {user && <Navbar />}
      <div className={user ? "page-with-nav" : "page-full"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  )
}