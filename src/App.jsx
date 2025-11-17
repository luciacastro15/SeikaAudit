import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Servicios from './Pages/Servicios.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Acceso from './Pages/Acceso.jsx'
import { Registro } from './Pages/Registro.jsx'
import { Login } from './Pages/Login.jsx'
import { HomeJefes } from './Pages/Jefes/HomeJefes.jsx'
import { HomeAuditores } from './Pages/Auditores/HomeAudit.jsx'
// import Servicios from './Pages/Servicios.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/jefes/homejefes" element={<HomeJefes />} />
        <Route path="/auditores/homeauditores" element={<HomeAuditores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
