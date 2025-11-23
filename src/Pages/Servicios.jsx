import { useState } from "react";
import planIndividual from "../assets/Servicios/plan-individual.png";
import planContinuo from "../assets/Servicios/plan-continuo.jpg";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "../css/Servicios.css";

export default function Servicios() {
  const [visibleInfo, setVisibleInfo] = useState({
    individual: false,
    continuo: false,
  });

  const mostrarInfo = (plan) => {
    setVisibleInfo((prev) => ({
      ...prev,
      [plan]: !prev[plan],
    }));
  };

  return (
    <>
      <Header />
      <section className="sn-servicios">
        <div className="intro-servicios">
          <h1>Servicios de auditoría y consultoría</h1>
          <p>
            Acompañamos a concesionarios y empresas en la evaluación de procesos,
            asegurando estándares de excelencia y resultados sostenibles.
          </p>
        </div>

        {/* Plan Individual */}
        <div className="plan plan-individual">
          <div className="planes-texto">
            <h2>Plan individual</h2>
            <p className="subtitulo">
              Auditorías puntuales adaptadas a cada concesionario.
            </p>
            <button className="btn-acceso">
              <a href="acceso.php">Acceso</a>
            </button>
            <button
              className="btn-vermas"
              onClick={() => mostrarInfo("individual")}
            >
              {visibleInfo.individual ? "Ver menos" : "Ver más"}
            </button>
            <div
              className={`info-extra ${visibleInfo.individual ? "visible" : ""}`}
            >
              <p>
                Este plan está pensado para negocios que requieren evaluaciones
                específicas en momentos clave, ofreciendo un análisis claro y
                personalizado sin compromisos a largo plazo.
              </p>
            </div>
          </div>
          <div className="planes-img">
            <img src={planIndividual} alt="Plan individual" />
          </div>
        </div>

        {/* Plan Continuo */}
        <div className="plan plan-continuo">
          <div className="planes-img">
            <img src={planContinuo} alt="Plan continuo" />
          </div>
          <div className="planes-texto">
            <h2>Plan continuo</h2>
            <p className="subtitulo">
              Supervisión constante para garantizar la mejora continua.
            </p>
            <button className="btn-acceso">
              <a href="acceso.php">Acceso</a>
            </button>
            <button
              className="btn-vermas"
              onClick={() => mostrarInfo("continuo")}
            >
              {visibleInfo.continuo ? "Ver menos" : "Ver más"}
            </button>
            <div
              className={`info-extra ${visibleInfo.continuo ? "visible" : ""}`}
            >
              <p>
                Ideal para cadenas o grupos de concesionarios, este plan asegura
                un seguimiento regular de procesos y estándares, permitiendo
                detectar oportunidades de mejora y mantener la calidad en todo
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
