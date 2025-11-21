import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/HeaderAuditores.css";

export default function HeaderAuditores() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Auditorías Pro</div>
      <nav className="nav">
        <ul className={open ? "show" : ""}>
          <li>
            <Link to="/auditores/historial">Historial Auditorías</Link>
          </li>
          <li>
            <Link to="/auditores/concesionario">Concesionarios</Link>
          </li>
          <li>
            <Link to="/auditores/perfil">
              <img src="/perfil.png" alt="Perfil" style={{ width: "40px" }} />
            </Link>
          </li>
          <li>
            <button onClick={()=>{
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              window.location.href="/login";
            }}>Cerrar Sesión</button>
          </li>
        </ul>
      </nav>
      <div
        className="menu-toggle"
        id="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </header>
  );
}


