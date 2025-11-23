import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.png";
import perfil from "../../assets/Perfiles/perfil.png"; // Asegúrate de tener esta imagen
import "../../css/Perfiles/Auditores/HeaderAuditores.css"; // Usa los estilos del Header 1


export default function HeaderAuditores() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.encabezado-contenido');
    if (header) {
      const headerHeight = header.offsetHeight + 40;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <header className="encabezado">
      <div className="contenedor encabezado-contenido">
        <div className="logo">
          <Link to="/auditores/perfil">
            <img src={logo} alt="Logo de la empresa" />
          </Link>
        </div>

        <nav className="menu">
          <ul className={open ? "show" : ""}>
            <li><Link to="/auditores/historial">Historial Auditorías</Link></li>
            <li><Link to="/auditores/concesionario">Concesionarios</Link></li>
            <li>
              <Link to="/auditores/perfil">
                <img src={perfil} alt="Perfil" style={{ width: "40px" }} />
              </Link>
            </li>
            <li>

            </li>
          </ul>
        </nav>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </header>
  );
}

