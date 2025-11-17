import { Link } from 'react-router-dom';
import logo from '../assets/Header/logo.png';
import '../css/Header.css';
import { useEffect } from 'react';
// import Servicios from '../Pages/Servicios.jsx';
 

export default function Header() {
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
          <Link to="/">
            <img src={logo} alt="Logo de la empresa" />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li>
              <Link to="/registro">
                <button style={{ color: 'white' }}>Registro</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

