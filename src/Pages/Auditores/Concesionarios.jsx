
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get_concesionarios } from '../../api/concesionarios.js';
import '../../css/ListaConcesionarios.css';

export function ListaConcesionarios() {
  const [concesionarios, setConcesionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConcesionarios = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const data = await get_concesionarios(token);
        setConcesionarios(data.concesionarios || []);
        console.log("Concesionarios cargados:", data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchConcesionarios();
  }, [navigate]);

  const handleCrearAuditoria = (concesionarioId, jefeId) => {
    navigate('/crear-auditoria', {
      state: { concesionarioId, jefeId }
    });
  };

  if (loading) return <p className="loading">Cargando concesionarios...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (concesionarios.length === 0) return <p className="empty">No hay concesionarios registrados.</p>;

  return (
  <div className="concesionarios-container">
    <h1 className="title">Listado de Concesionarios</h1>
    <div className="concesionarios-grid">
      {concesionarios.map((c) => (
        <div key={c.id} className="concesionario-card">
          <h2>{c.nombre}</h2>
          <p><strong>Ubicación:</strong> {c.ubicacion}</p>
          <p><strong>Teléfono:</strong> {c.telefono}</p>
          <p><strong>Marca:</strong> {c.marca}</p>
          <p><strong>Jefe:</strong> {c.jefe?.nombre}</p>
          <button
            className="btn-crear"
            onClick={() => handleCrearAuditoria(c.id, c.jefe?.id)}
          >
            + Crear Auditoría
          </button>
        </div>
      ))}
    </div>
  </div>
);
}