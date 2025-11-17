import {get_auditorias_by_auditor} from '../../api/auditorias.js';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function HomeAuditores() {
    const [auditorias, setAuditorias] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
    if (loading) {
        return <p>Cargando auditorías...</p>;
    }
    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }
    if (auditorias.length === 0) {
        return <p>No hay auditorías asignadas.</p>;
    }
  return (
    <div>
      <h1>Bienvenido, Auditor</h1>
      {loading && <p>Cargando auditorías...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
            <div>
                <h2>Lista de Auditorías</h2>
                {auditorias.length === 0 ? (
                    <p>No hay auditorías asignadas.</p>
                ) : (
                    <ul>
                        {auditorias.map((auditoria) => (
                            <li key={auditoria.id}>
                                <h3>{auditoria.id}</h3>
                                <p>{auditoria.concesionario.nombre}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )}
    </div>
  );
}