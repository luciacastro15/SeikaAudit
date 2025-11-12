import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Servicios from './Pages/Servicios.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Acceso from './Pages/Acceso.jsx'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
