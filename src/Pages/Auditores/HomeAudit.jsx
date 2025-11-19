import { get_auditorias_by_auditor } from '../../api/auditorias.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/HomeAuditores.css';

export function HomeAuditores() {
  const [auditorias, setAuditorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuditorias = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      if (!token || !user) {
        navigate('/login');
        return;
      }
      try {
        const data = await get_auditorias_by_auditor(user.id, token);
        setAuditorias(data.auditorias || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAuditorias();
  }, [navigate]);

  if (loading) return <p className="loading">Cargando auditorías...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (auditorias.length === 0) return <p className="empty">No hay auditorías asignadas.</p>;

  return (
    <div className="home-auditor">
      <h1 className="title">Historial de Auditorías</h1>
      <div className="auditorias-grid">
        {auditorias.map((auditoria) => (
          <div key={auditoria.id} className="auditoria-card">
            <div className="card-header">
              <h2>Auditoría #{auditoria.id}</h2>
              <span>{new Date(auditoria.created_at).toLocaleDateString()}</span>
            </div>
            <div className="card-body">
              <p><strong>Concesionario:</strong> {auditoria.concesionario.nombre} ({auditoria.concesionario.marca})</p>
              <p><strong>Ubicación:</strong> {auditoria.concesionario.ubicacion}</p>
              <p><strong>Jefe:</strong> {auditoria.jefe.nombre}</p>
              <p><strong>Auditor:</strong> {auditoria.auditor.nombre}</p>
              <div className="respuestas">
                <h4>Respuestas:</h4>
                {auditoria.respuestas.map((r) => (
                  <div key={r.id} className="respuesta">
                    <p><strong>{r.pregunta.texto}</strong> ({r.pregunta.bloque.nombre})</p>
                    <p>Respuesta: {r.respuesta_texto}</p>
                    <p>Comentario: {r.comentario}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}