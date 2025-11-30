import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { update_plan } from "../../api/usuarios";
import "../../css/Perfiles/Jefes/MiPlan.css";

export default function MiPlan() {
  const [user, setUser] = useState(null);
  const [currentPlan, setCurrentPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    if (storedUser.rol_id !== 2) {
      navigate("/jefes");
      return;
    }

    setUser(storedUser);
    setCurrentPlan(storedUser.plan || "individual");
  }, [navigate]);

  const handleChangePlan = async (newPlan) => {
    if (!user || newPlan === currentPlan) return;

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const data = await update_plan(newPlan);
      setCurrentPlan(data.plan);
      const updatedUser = { ...user, plan: data.plan };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setMessage("Plan actualizado correctamente.");
    } catch (err) {
      setError(err.response?.data?.message || "Error al actualizar el plan.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Cargando...</p>;

  return (
    <div className="plan-container">
      <h1 className="plan-title">Comparativa de Planes</h1>
      <br />
      <div className="plans-section">
        <div className="plans-info">
          <h2>Plan Individual</h2>
          <ul>
            <li>
              <strong> - Foco absoluto:</strong> Centra recursos y atención en
              un único concesionario.
            </li>
            <li>
              <strong> - Gestión sencilla:</strong> Menos complejidad operativa,
              ideal para equipos pequeños o fase inicial.
            </li>
            <li>
              <strong> - Coste optimizado:</strong> Más económico que planes
              multi-concesionario, con auditorías ilimitadas incluidas.
            </li>
            <li>
              <strong> - Implementación rápida:</strong> Onboarding y
              configuración más ágiles al tratar con un solo sitio.
            </li>
          </ul>
          <br />

          <h2>Plan Continuo</h2>
          <ul>
            <li>
              <strong> - Escalabilidad total:</strong> Añade tantos
              concesionarios como necesites sin límites.
            </li>
            <li>
              <strong> - Visión integral:</strong> Comparativas y métricas
              transversales para detectar patrones y oportunidades.
            </li>
            <li>
              <strong> - Estandarización:</strong> Aplica procesos y controles
              uniformes en toda la red.
            </li>
            <li>
              <strong> - Optimización de recursos:</strong> Centraliza
              auditorías y reportes para ganar eficiencia.
            </li>
          </ul>
        </div>

        <div className="plans-selector">
          <div
            className={`plan-card ${
              currentPlan === "individual" ? "active" : ""
            }`}
            onClick={() => handleChangePlan("individual")}
          >
            <h3>PLAN INDIVIDUAL</h3>
            <p>Acceso para un concesionario.</p>
            <span className="btn-select">
              {currentPlan === "individual" ? "ACTIVO" : "Seleccionar"}
            </span>
          </div>

          <div
            className={`plan-card ${
              currentPlan === "continuo" ? "active" : ""
            }`}
            onClick={() => handleChangePlan("continuo")}
          >
            <h3>PLAN CONTINUO</h3>
            <p>Concesionarios ilimitados.</p>
            <span className="btn-select">
              {currentPlan === "continuo" ? "ACTIVO" : "Seleccionar"}
            </span>
          </div>
        </div>
      </div>

      <div className="current-plan-box">
        <h2>Plan actual:</h2>
        <p className="current-plan">{currentPlan}</p>
      </div>

      {message && <p className="msg-success">{message}</p>}
      {error && <p className="msg-error">{error}</p>}
    </div>
  );
}

// <div className="mi-plan-container">
//   <h1>Mi plan</h1>

//   <p>
//     <strong>Plan actual:</strong>{" "}
//     <span style={{ textTransform: "capitalize" }}>{currentPlan}</span>
//   </p>

//   <div className="mi-plan-buttons">
//     <button
//       type="button"
//       disabled={loading || currentPlan === "individual"}
//       onClick={() => handleChangePlan("individual")}
//       className={
//         currentPlan === "individual" ? "btn-plan activo" : "btn-plan"
//       }
//     >
//       Plan Individual
//     </button>

//     <button
//       type="button"
//       disabled={loading || currentPlan === "continuo"}
//       onClick={() => handleChangePlan("continuo")}
//       className={
//         currentPlan === "continuo" ? "btn-plan activo" : "btn-plan"
//       }
//     >
//       Plan Continuo
//     </button>
//   </div>

//   {message && <p style={{ color: "green" }}>{message}</p>}
//   {error && <p style={{ color: "red" }}>{error}</p>}

//   <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
//     <strong>Individual:</strong> solo 1 concesionario. <br />
//     <strong>Continuo:</strong> concesionarios ilimitados.
//   </p>
// </div>
