import React from "react";
import client from "../../api/client";
import "../../css/Perfiles/Jefes/PerfilJefe.css";
import foto from "../../assets/About/administradora.png";

export default function PerfilJefes() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="perfil-jefe-container">
      <div className="perfil-card">
        <div className="perfil-foto">
          <img
            src={foto}
            alt={`Foto de ${user?.nombre}`}
          />
        </div>

        <div className="perfil-info">
          <h1 className="perfil-nombre">{user?.nombre || "Admin"}</h1>
          <p className="perfil-bienvenida">
            Bienvenido/a a tu panel de Administradora. 
          </p>

          <button className="btn-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
