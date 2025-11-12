import '../css/About.css';
import fotoAbout from '../assets/About/about.jpg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <>
    <Header />
    <section className="sn-general">
      <div className="sn-intro">
        <h1>Quiénes somos</h1>
        <p>
          Seika Audit es una empresa especializada en la evaluación de procesos de venta y atención en concesionarios.
          Nuestro equipo de auditores externos garantiza el cumplimiento de estándares de calidad y mejora continua.
        </p>
      </div>

      <div className="historia">
        <div className="historia-img">
          <img src={fotoAbout} alt="Mesa rústica con comida" className="col-6" />
          <img src={fotoAbout} alt="Mesa rústica con comida" className="col-6" />
        </div>
        <div className="historia-text">
          <p>
            Fundada en 2016 en Arroyomolinos, nuestra empresa nació con el objetivo de ofrecer soluciones prácticas y personalizadas en un mercado cada vez más exigente.
            Desde el principio, apostamos por la cercanía con el cliente, la mejora continua y la calidad como pilares fundamentales de nuestro trabajo.
          </p>
          <p>
            Lo que comenzó como un pequeño proyecto local, pronto fue ganando reconocimiento gracias a la confianza de nuestros primeros clientes y al compromiso de un equipo que comparte una misma visión: hacer las cosas bien, con profesionalidad y atención al detalle.
          </p>
          <p>
            A lo largo de los años, hemos ampliado nuestros servicios, incorporado nuevas tecnologías y formado alianzas estratégicas que nos permiten seguir creciendo sin perder nuestra esencia.
            Hoy, seguimos trabajando con la misma ilusión del primer día, adaptándonos a los cambios y manteniendo siempre el foco en lo que realmente importa: las personas.
          </p>
        </div>
      </div>

      <div className="equipo">
        <h2>Nuestro equipo</h2>
        <div className="miembros">
          <div className="Concesionarios">
            <img src="" alt="Concesionarios" />
            <p>Jefes de concesionarios</p>
          </div>
          <div className="persona">
            <img src="" alt="Auditores" />
            <p>Auditores</p>
          </div>
          <div className="persona">
            <img src="" alt="Administradora" />
            <p>Administradora</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
    