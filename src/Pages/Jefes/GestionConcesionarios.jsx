import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  get_concesionarios,
  delete_concesionarios,
} from "../../api/concesionarios";

import "../../css/Perfiles/Jefes/GestionConcesionarios.css";

export default function GestionConcesionarios() {
  const [concesionarios, setConcesionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (!token || !user) {
        navigate("/login");
        return;
      }

      try {
        const data = await get_concesionarios();
        console.log(data.concesionarios);
        setConcesionarios(data.concesionarios);
      } catch (error) {
        setError(error.message || "Error al cargar concesionarios");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que quieres eliminar este concesionario?")) return;

    try {
      await delete_concesionarios(id);
      setConcesionarios((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Error al eliminar");
    }
  };

  if (loading) return <p>Cargando concesionarios...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="concesionarios-container">
      <button
        type="button"
        className="btn-crear"
        onClick={() => navigate("/jefes/concesionarios/crear")}
      >
        Crear Concesionario
      </button>
      <h1 className="concesionarios-title">Gestión de Concesionarios</h1>

      <div className="concesionarios-grid">
        {concesionarios.map((conce) => (
          <div key={conce.id} className="concesionario-card">
            <img
              className="concesionario-img"
              src={
                conce.img
                  ? `${import.meta.env.VITE_IMG}/${conce.img}`
                  : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt={conce.nombre}
            />

            <h2 className="concesionario-title">{conce.nombre}</h2>

            <div className="concesionario-info">
              <p>
                <strong>Marca:</strong> {conce.marca}
              </p>
              <p>
                <strong>Ubicación:</strong> {conce.ubicacion}
              </p>
              <p>
                <strong>Teléfono:</strong> {conce.telefono}
              </p>
            </div>

            <div className="concesionario-jefe">
              <p>
                <strong>Jefe:</strong> {conce.jefe?.nombre}
              </p>
              <p>{conce.jefe?.email}</p>
            </div>

            <div className="concesionario-buttons">
              <button
                className="btn-edit"
                onClick={() =>
                  navigate(`/jefes/concesionarios/editar/${conce.id}`)
                }
              >
                Editar
              </button>

              <button
                className="btn-delete"
                onClick={() => handleDelete(conce.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
