import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Servicios from "./Pages/Servicios.jsx";
import Home from "./Pages/Home.jsx";
import Contacto from "./Pages/Contacto.jsx";
import About from "./Pages/About.jsx";
import Acceso from "./Pages/Acceso.jsx";
import { Registro } from "./Pages/Registro.jsx";
import { Login } from "./Pages/Login.jsx";
import { HistorialAuditoriasA } from "./Pages/Auditores/HistorialAuditoriasA.jsx";
import { AuditoresLayout } from "./Pages/Auditores/AuditoresLayout.jsx";
import { ListaConcesionarios } from "./Pages/Auditores/Concesionarios.jsx";
import PerfilAuditor from "./Pages/Auditores/Perfil.jsx";
import CrearAuditoria from "./Pages/Auditores/CrearAuditoria.jsx";

import { JefesLayout } from "./Pages/Jefes/JefesLayout.jsx";
import PerfilJefes from "./Pages/Jefes/PerfilJefes.jsx";
import { HistorialAuditoriasJ } from "./Pages/Jefes/HistorialAuditoriasJ.jsx";
import GestionConcesionarios from "./Pages/Jefes/GestionConcesionarios.jsx";
import CrearConcesionario from "./Pages/Jefes/CrearConcesionario.jsx";
import EditarConcesionario from "./Pages/Jefes/EditarConcesionario.jsx";
import MiPlan from "./Pages/Jefes/miplan.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        {/* <Route path="/jefes/homejefes" element={<HomeJefes />} /> */}
        <Route path="/auditores" element={<AuditoresLayout />}>
          <Route index element={<PerfilAuditor />} />
          <Route path="perfil" element={<PerfilAuditor />} />
          <Route path="historial" element={<HistorialAuditoriasA />} />
          <Route path="concesionario" element={<ListaConcesionarios />} />
          <Route path="crear-auditoria" element={<CrearAuditoria />} />
        </Route>
        <Route path="/jefes" element={<JefesLayout />}>
          <Route index element={<PerfilJefes />} />
          <Route path="perfil" element={<PerfilJefes />} />
          <Route path="historial" element={<HistorialAuditoriasJ />} />
          <Route path="concesionarios" element={<GestionConcesionarios />} />
          <Route
            path="concesionarios/crear"
            element={<CrearConcesionario />}
          />
          <Route
            path="concesionarios/editar/:id"
            element={<EditarConcesionario />}
          />
          <Route
            path="mi-plan"
            element={<MiPlan />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
