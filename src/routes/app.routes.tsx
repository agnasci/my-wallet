import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/list/:type" element={<List />} />
    </Routes>
  </Router>
)

export default App
