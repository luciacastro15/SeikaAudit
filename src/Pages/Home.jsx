import "../css/Home.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

import analisis from "../assets/Home/analisis.png";
import auditorias from "../assets/Home/auditorias.png";
import banner2 from "../assets/Home/banner2.jpg";
import evaluar from "../assets/Home/evaluar.png";
import seguridad from "../assets/Home/seguridad.png";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-principal">
        {/* Hero */}
        <section className="home-hero">
          <div className="home-banner">
            <img src={banner2} alt="Banner principal" />
          </div>
          <div className="home-texto-hero">
            <h1>Gestión integral de auditorías externas para concesionarios</h1>
            <p>
              Digitaliza tus auditorías de principio a fin con nuestras
              soluciones.
            </p>
            <Link to="/servicios">
              <button className="home-button">Servicios</button>
            </Link>
          </div>
        </section>

        {/* Tarjetas */}
        <section className="home-tarjetas">
          <div className="home-tarjetas-titulo">
            <h2>Digitaliza tus auditorías de principio a fin</h2>
          </div>
          <div className="home-tarjetas-fila">
            <div className="home-tarjeta">
              <img src={auditorias} alt="Auditorías" />
              <h3>Asigna auditorías</h3>
              <p>Revisión detallada para optimizar procesos.</p>
            </div>
            <div className="home-tarjeta">
              <img src={evaluar} alt="Evaluar procesos" />
              <h3>Evalúa procesos</h3>
              <p>Convierte tus auditorías en informes inteligentes.</p>
            </div>
            <div className="home-tarjeta">
              <img src={analisis} alt="Análisis de resultados" />
              <h3>Analiza resultados</h3>
              <p>Asesoramiento estratégico para tu negocio.</p>
            </div>
          </div>
        </section>

        {/* Ventajas */}
        <section className="home-ventajas">
          <div className="home-contenedor-ventajas">
            <h2>Gestión inteligente de auditorías</h2>
            <div className="home-bloques-ventaja">
              <div className="home-ventaja">
                <h3>Ahorra tiempo en la gestión administrativa</h3>
                <p>
                  Automatiza la planificación, ejecución y seguimiento de
                  auditorías para reducir tareas manuales.
                </p>
              </div>
              <div className="home-ventaja">
                <h3>Datos seguros y centralizados</h3>
                <p>
                  Protege la información con acceso restringido, almacenamiento
                  en la nube y trazabilidad completa.
                </p>
              </div>
              <div className="home-ventaja">
                <h3>Control total del rendimiento</h3>
                <p>
                  Supervisa el desempeño de cada concesionario con informes
                  estratégicos y seguimiento detallado.
                </p>
              </div>
            </div>
            <div className="home-botones-ventaja">
              <Link to="/registro">
                <button>Acceso</button>
              </Link>
              <Link to="/contacto">
                <button>Contacto</button>
              </Link>
            </div>
          </div>

          <div className="home-imagen-ventaja">
            <img src={seguridad} alt="Seguridad de datos" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
