import logo2 from '../assets/Footer/logo.png';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="pie">
      <div className="contenedor pie-contenido">
        <div className="pie-izquierda">
          <img src={logo2} alt="Logo" className="logo-footer" />
          <ul className="enlaces-footer">
            <li><strong>📤:</strong> contacto@serraaudit.com</li>
            <li><strong>📞:</strong> +34 912 345 678</li>
            <li><strong>🔗:</strong> www.serraaudit.com</li>
          </ul>
        </div>

        <div className="pie-derecha">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.804088399613!2d-3.922002123498076!3d40.280101963942876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4192891bb170db%3A0xdaca200994ea645d!2sC.%20Aguilas%2C%201%2C%2028939%20Arroyomolinos%2C%20Madrid!5e0!3m2!1ses!2ses!4v1761497989962!5m2!1ses!2ses"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación SerraAudit"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}