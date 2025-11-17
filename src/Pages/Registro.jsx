import { useState } from "react";
import { register_user } from "../api/auth";
import { Link } from "react-router-dom";
import "../css/Registro.css";
import registro from "../assets/Formularios_Accesos/Registro.webp";

export function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    rol_id: 2,
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      console.log(formData);
      const response = await register_user(formData); //objeto formData con datos del usuario registrado (auth.jsx)
      setSuccess("Registro exitoso. Por favor, inicia sesión.");
    } catch (err) {
      setError("Error en el registro. Inténtalo de nuevo.");
      console.error(err);
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-container-texto col-6">
        <h2>Bienvenido, ¡regístrate aquí!</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Tipo de cuenta:</label>
            <select name="rol_id" value={formData.rol_id} onChange={handleChange} placeholder="Tipo de cuenta">
              <option value={2}>Jefe de Concesionario</option>
              <option value={3}>Auditor</option>
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
        <p>
          ¿Ya tienes una cuenta?
          <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
      <div className="registro-container-foto col-6">
        <img src={registro} alt="" />
      </div>
    </div>
  );
}
