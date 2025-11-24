import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login_user } from "../api/auth";
import loginImage from "../assets/Formularios_accesos/Login.webp"; 
import "../css/Login.css"; 
import Header from "../Components/Header.jsx";



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
    setError("");

    try {
      const response = await login_user(formData.email, formData.password);
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.usuario));

      if (response.usuario.rol_id === 2) {
        navigate("/jefes/perfil");
      } else if (response.usuario.rol_id === 3) {
        navigate("/auditores");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Error al iniciar sesión. Intenta más tarde.");
    }
  };

  return (
        <>
          <Header />
    
    <section className="section-login">
      <div className="login-container">
        <div className="login-container-form col-6">
          <h2>Bienvenido, ¡Inicia sesión!</h2>
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
          <br />
          <p>
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
        <div className="login-container-image col-6">
          <img src={loginImage} alt="Login visual" />
        </div>
      </div>
    </section>
    </>
  );
}
