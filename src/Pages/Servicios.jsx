import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../css/Servicios.css";
import { useState } from "react";

import planIndividual from "../assets/Servicios/plan-individual.png";
import planContinuo from "../assets/Servicios/plan-continuo.png";

export default function Servicios() {
  const [visibleInfo, setVisibleInfo] = useState({
    individual: false,
    continuo: false,
  });

  const mostrarInfo = (plan) => {
    setVisibleInfo((prevState) => ({
      ...prevState,
      [plan]: !prevState[plan],
    }));
  };

  return (
    <>
      <Header />
      <section className="sn-servicios">
        <div className="intro">
          <h1>Nuestros servicios de auditoría y consultoría</h1>
          <p>
            Ofrecemos soluciones adaptadas a las necesidades de cada concesionario
          </p>
          <button className="btn-acceso">Acceso</button>
        </div>

        <div className="planes">
          {/* Plan Individual */}
          <div className="plan" id="plan-individual">
            <h2>Plan individual</h2>
            <p className="subtitulo">
              Un subtítulo para esta sección, tan largo o tan corto como quieras
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
            {visibleInfo.individual && (
              <div className="info-extra" id="info-individual">
                <p>
                  Este plan está diseñado para negocios únicos que necesitan auditorías puntuales y personalizadas.
                </p>
              </div>
            )}
            <img src={planIndividual} alt="Frutas plan individual" />
          </div>

          {/* Plan Continuo */}
          <div className="plan" id="plan-continuo">
            <h2>Plan continuo</h2>
            <p className="subtitulo">
              Un subtítulo para esta sección, tan largo o tan corto como quieras
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
            {visibleInfo.continuo && (
              <div className="info-extra" id="info-continuo">
                <p>
                  Este plan ofrece seguimiento constante, ideal para cadenas o franquicias que requieren control regular.
                </p>
              </div>
            )}
            <img src={planContinuo} alt="Frutas plan continuo" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}