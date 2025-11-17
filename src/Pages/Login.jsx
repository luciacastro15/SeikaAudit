import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login_user } from "../api/auth";
import loginImage from "../assets/Formularios_accesos/Login.webp"; // Ajusta la ruta según tu estructura
import "../css/Registro.css"; // Asegúrate de tener el CSS correspondiente

export function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setError("");

    try {
      const response = await login_user(formData.email, formData.password);
      console.log("Respuesta del servidor:", response);
      // Suponiendo que la respuesta contiene un token y datos del usuario
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.usuario));
      console.log("Usuario logueado:", response.usuario);
      if (response.usuario.rol_id === 2) {
        navigate("/jefes/homejefes");
      } else if (response.usuario.rol_id === 3) {
        navigate("/auditores/homeauditores");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intenta más tarde.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-container-form col-6">
          <h2>INICIAR SESIÓN</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Entrar</button>
          </form>
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
        <div className="login-container-image col-6">
          <img src={loginImage} alt="Login visual" />
        </div>
      </div>
    </div>
  );
}
