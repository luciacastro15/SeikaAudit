import "../css/About.css";
import fotoAbout from "../assets/About/about.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import jefesImg from "../assets/About/jefe.png";
import auditoresImg from "../assets/About/auditor.png";
import adminImg from "../assets/About/administradora.png";
import aboutIcon from "../assets/About/sobre-nosotros.png"; // ajusta el nombre si es distinto

export default function About() {
  return (
    <>
      <Header />
      <section className="about-hero">
        <section className="about-hero-split">
          <div className="hero-left">
            <img src={aboutIcon} alt="About Us icon" className="hero-icon" />
          </div>

          <div className="hero-right">
            <p>
              Seika Audit es una empresa especializada en la evaluación de
              procesos de venta y atención en concesionarios. Nuestro equipo de
              auditores externos garantiza el cumplimiento de estándares de
              calidad y mejora continua.
            </p>
          </div>
        </section>
      </section>

      {/* Historia con más aire */}
      <section className="about-historia">
        <div className="historia-text">
          <h2>Nuestra historia</h2>
          <p>
            Fundada en 2016 en Arroyomolinos, nuestra empresa nació con el
            objetivo de ofrecer soluciones prácticas y personalizadas en un
            mercado cada vez más exigente.
          </p>
          <p>
            Lo que comenzó como un pequeño proyecto local, pronto fue ganando
            reconocimiento gracias a la confianza de nuestros primeros clientes
            y al compromiso de un equipo que comparte una misma visión: hacer
            las cosas bien, con profesionalidad y atención al detalle.
          </p>
          <p>
            A lo largo de los años, hemos ampliado nuestros servicios,
            incorporado nuevas tecnologías y formado alianzas estratégicas que
            nos permiten seguir creciendo sin perder nuestra esencia.
          </p>
          <p>
            Hoy, seguimos trabajando con la misma ilusión del primer día,
            adaptándonos a los cambios y manteniendo siempre el foco en lo que
            realmente importa: las personas.
          </p>
        </div>
        <div className="historia-img">
          <img src={fotoAbout} alt="Equipo Seika Audit" />
        </div>
      </section>

      {/* Equipo */}
      <section className="about-equipo">
        <div className="equipo-header">
          <h2>Nuestro equipo</h2>
          <p>
            Personas comprometidas con la excelencia, la mejora continua y el
            acompañamiento cercano a cada cliente.
          </p>
        </div>

        <div className="equipo-grid">
          <div className="equipo-card">
            <img
              src={jefesImg}
              alt="Jefes de concesionarios"
              className="equipo-foto"
            />
            <p>Jefes de concesionarios</p>
          </div>
          <div className="equipo-card">
            <img src={auditoresImg} alt="Auditores" className="equipo-foto" />
            <p>Auditores</p>
          </div>
          <div className="equipo-card">
            <img src={adminImg} alt="Administración" className="equipo-foto" />
            <p>Administración</p>
          </div>
        </div>
      </section>
      <br />
      <br />

      <Footer />
    </>
  );
}
