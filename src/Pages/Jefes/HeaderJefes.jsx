import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.png";
import perfil from "../../assets/Perfiles/perfil.png"; // Asegúrate de tener esta imagen
import "../../css/Perfiles/Jefes/HeaderJefes.css"; // Usa los estilos del Header 1

export default function HeaderJefes() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector(".encabezado-contenido");
    if (header) {
      const headerHeight = header.offsetHeight + 40;
      document.body.style.paddingTop = `${headerHeight}px`;
    }
  }, []);

  return (
    <header className="encabezado">
      <div className="contenedor encabezado-contenido">
        <div className="logo">
          <Link to="/jefes/perfil">
            <img src={logo} alt="Logo de la empresa" />
          </Link>
        </div>

        <nav className="menu">
          <ul className={open ? "show" : ""}>
            <li>
              <Link to="/jefes/concesionarios">Concesionarios</Link>
            </li>
            <li>
              <Link to="/jefes/historial">Historial Auditorías</Link>
            </li>
            <li>
              <Link to="/jefes/perfil">
                <img src={perfil} alt="Perfil" style={{ width: "40px" }} />
              </Link>
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
