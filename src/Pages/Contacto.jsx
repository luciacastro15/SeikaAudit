import React from "react";
import "../css/Contacto.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import contactoImage from "../assets/Contacto/introduccion.png";

export default function Contacto() {
  return (
    <>
      <Header />

      <section className="contact-section">
        <div className="contact-header">
          <h1>Contáctanos</h1>
          <p className="intro">
            Bienvenido a Seika Audit. Ayudamos a concesionarios a optimizar su
            gestión mediante auditorías completas y soluciones prácticas.
            Contáctanos para descubrir cómo podemos aportar claridad y confianza
            a tu empresa.
          </p>
        </div>

        <div className="contact-columns">
          <div className="contact-box">
            <h2>Email</h2>
            <p>seikaaudit@gmail.com</p>
          </div>
          <div className="contact-box">
            <h2>Teléfono</h2>
            <p>+34 758 456 499</p>
          </div>
          <div className="contact-box">
            <h2>Horario</h2>
            <p>Lunes a Viernes: 9:00 – 18:00 </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
