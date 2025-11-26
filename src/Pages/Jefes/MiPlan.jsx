import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { update_plan } from "../../api/usuarios"; 

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
      setError(
        err.response?.data?.message || "Error al actualizar el plan."
      );
    } finally {
      setLoading(false);
    }
  };
 
  if (!user) return <p>Cargando...</p>;
 
  return (
    <div className="mi-plan-container">
      <h1>Mi plan</h1>
 
      <p>
        <strong>Plan actual:</strong>{" "}
        <span style={{ textTransform: "capitalize" }}>{currentPlan}</span>
      </p>
 
      <div className="mi-plan-buttons">
        <button
          type="button"
          disabled={loading || currentPlan === "individual"}
          onClick={() => handleChangePlan("individual")}
          className={
            currentPlan === "individual" ? "btn-plan activo" : "btn-plan"
          }
        >
          Plan Individual
        </button>
 
        <button
          type="button"
          disabled={loading || currentPlan === "continuo"}
          onClick={() => handleChangePlan("continuo")}
          className={
            currentPlan === "continuo" ? "btn-plan activo" : "btn-plan"
          }
        >
          Plan Continuo
        </button>
      </div>
 
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
 
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        <strong>Individual:</strong> solo 1 concesionario. <br />
        <strong>Continuo:</strong> concesionarios ilimitados.
      </p>
    </div>
  );
}
 
 