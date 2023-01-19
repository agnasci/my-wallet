import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'

const AuthRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  </Router>
)

export default AuthRoutes
