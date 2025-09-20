import { useState } from 'react'

import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
function App() {
 
const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <LandingPage onGetStarted={() => setShowLogin(true)} />
      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      
    </>
  )
}

export default App
