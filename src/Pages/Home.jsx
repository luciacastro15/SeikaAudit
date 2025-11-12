import '../css/Home.css';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
// import Servicios from './Pages/Servicios.jsx';


import analisis from '../assets/Home/analisis.png';
import auditorias from '../assets/Home/auditorias.png';
import banner from '../assets/Home/banner.jpg';
import evaluar from '../assets/Home/evaluar.png';
import seguridad from '../assets/Home/seguridad.png';

import { Link } from 'react-router-dom';


export default function Home() {
  return (
     <>
      <Header />

    <main className="principal">
      <section className="hero">
        <div className="texto-hero">
          <h1>Gestión integral de auditorías externas para concesionarios</h1>
          <p>Digitaliza tus auditorías de principio a fin con nuestras soluciones.</p>
          <Link to="/servicios"><button>Servicios</button></Link>
        </div>
        <div className="banner">
          <img src={banner} alt="Banner principal" />
        </div>
      </section>

      <section className="tarjetas">
        <h2>Digitaliza tus auditorías de principio a fin</h2>
        <div className="fila">
          <div className="col-4 tarjeta">
            <img src={auditorias} alt="Auditorías" />
            <h3>Asigna auditorías</h3>
            <p>Revisión detallada para optimizar procesos.</p>
          </div>
          <div className="col-4 tarjeta">
            <img src={evaluar} alt="Evaluar procesos" />
            <h3>Evalúa procesos</h3>
            <p>Convierte tus auditorías en informes inteligentes.</p>
          </div>
          <div className="col-4 tarjeta">
            <img src={analisis} alt="Análisis de resultados" />
            <h3>Analiza resultados</h3>
            <p>Asesoramiento estratégico para tu negocio.</p>
          </div>
        </div>
      </section>

      <section className="sec-ventajas">
        <div className="ventajas col-6">
          <h1>Digitaliza tus auditorías de principio a fin</h1>
          <h3>Ahorra tiempo en la gestión administrativa</h3>
          <p>
            Reduce el tiempo dedicado a tareas manuales mediante flujos automatizados que agilizan la planificación, ejecución y seguimiento de cada auditoría.
          </p>
          <h3>Datos seguros y centralizados</h3>
          <p>
            Garantiza la protección de la información con acceso restringido, almacenamiento en la nube y trazabilidad completa de cada acción realizada en el sistema.
          </p>
          <h3>Control total del rendimiento de cada concesionario</h3>
          <p>
            Garantiza la protección de la información con acceso restringido, almacenamiento en la nube y trazabilidad completa de cada acción realizada en el sistema.
          </p>
          <div>
            <Link to="/acceso"><button>Acceso</button></Link>
            <Link to="/contacto"><button>Contacto</button></Link>

            {/* <button>
              <a href="/acceso">Acceso</a>
            </button>
            <button>
              <a href="/contacto">Contáctanos</a>
            </button> */}
          </div>
        </div>
        <div className="img-ventajas col-6">
          <img src={seguridad} alt="Seguridad de datos" />
        </div>
      </section>
    </main>
    <Footer />
     </>

  );
}



