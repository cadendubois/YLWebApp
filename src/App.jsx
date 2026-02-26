import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'

export default function App() {


  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

