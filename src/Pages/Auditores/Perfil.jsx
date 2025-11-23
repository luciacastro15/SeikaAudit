import React from "react";
import client from "../../api/client";
import "../../css/Perfiles/Auditores/PerfilAuditor.css";
import foto from "../../assets/About/administradora.png";

export default function PerfilAuditor() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="perfil-auditor-container">
      <div className="perfil-card">
        {/* Foto del auditor */}
        <div className="perfil-foto">
          <img
            src={foto}
            alt={`Foto de ${user?.nombre}`}
          />
        </div>

        {/* Información del auditor */}
        <div className="perfil-info">
          <h1 className="perfil-nombre">{user?.nombre || "Auditor"}</h1>
          <p className="perfil-bienvenida">
            Bienvenido/a a tu panel de auditorías. Aquí podrás gestionar tus
            concesionarios, crear nuevas auditorías y revisar el historial de
            tus evaluaciones.
          </p>

          {/* Botón de cerrar sesión */}
          <button className="btn-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
