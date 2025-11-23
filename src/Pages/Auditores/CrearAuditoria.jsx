import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { create_auditoria } from "../../api/auditorias.js";
import { create_respuesta } from "../../api/respuestas.js";
import { get_preguntas } from "../../api/preguntas.js";
import { get_bloques } from "../../api/bloques.js";
import "../../css/Perfiles/Auditores/CrearAuditoria.css";

export default function CrearAuditoria() {
  const location = useLocation();
  const navigate = useNavigate();

  const { concesionario_id, jefe_id } = location.state || {};
  const user = JSON.parse(localStorage.getItem("user"));
  const auditor_id = user?.id || null;

  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [bloques, setBloques] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const dataPreg = await get_preguntas();
      const dataBloq = await get_bloques();
      setPreguntas(dataPreg || []);
      setBloques(dataBloq || []);
      //   console.log("Preguntas cargadas:", dataPreg);
      //     console.log("Bloques cargados:", dataBloq);

      setLoading(false);
    }
    load();
  }, []);

  const handleRespuestaChange = (pregunta_id, value) => {
    setRespuestas({ ...respuestas, [pregunta_id]: value });
  };
  const handleComentarioChange = (pregunta_id, value) => {
    setComentarios({ ...comentarios, [pregunta_id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const auditoriaData = {
        auditor_id,
        jefe_id,
        concesionario_id,
      };
      console.log("Creando respuesta:", auditoriaData);

      const auditoria = await create_auditoria(auditoriaData);

      for (const pregunta of preguntas) {
        const respuestaData = {
          pregunta_id: pregunta.id,
          auditoria_id: auditoria.id,
          respuesta_texto: respuestas[pregunta.id] || "",
          comentario: comentarios[pregunta.id] || "",
        };

        // 'pregunta_id' => 'sometimes|required|integer',
        //     'auditoria_id' => 'sometimes|required|integer',
        //     'respuesta_texto' => 'sometimes|required|string',
        //     'comentario' => 'nullable|string',
        await create_respuesta(respuestaData);
      }
      alert("Auditoría creada exitosamente");
      navigate("/auditores");
    } catch (error) {
      alert("Error al crear la auditoría: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Cargando preguntas...</p>;
  const bloquesConPreguntas = bloques.map((bloque) => ({
    ...bloque,
    preguntas: preguntas.filter((p) => p.bloque_id === bloque.id),
  }));
  //   console.log("Bloques con preguntas:", bloquesConPreguntas);
  return (
    <div className="crear-auditoria-container">
      <h1>Crear Nueva Auditoría</h1>
      <form onSubmit={handleSubmit}>
        {bloquesConPreguntas.map((bloque) => (
          <div key={bloque.id} className="bloque-section">
            <h2>{bloque.nombre}</h2>
            {bloque.preguntas.map((pregunta) => (
              <div key={pregunta.id} className="pregunta-item">
                <label>{pregunta.texto}</label>
                <select
                  value={respuestas[pregunta.id] || ""}
                  onChange={(e) =>
                    handleRespuestaChange(pregunta.id, e.target.value)
                  }
                  required
                >
                  <option value="">Seleccione una respuesta</option>
                  <option value="1">1 - Muy mal</option>
                  <option value="2">2 - Mal</option>
                  <option value="3">3 - Normal</option>
                  <option value="4">4 - Bien</option>
                  <option value="5">5 - Muy bien</option>
                </select>
                <textarea
                  placeholder="Comentario (opcional)"
                  value={comentarios[pregunta.id] || ""}
                  onChange={(e) =>
                    handleComentarioChange(pregunta.id, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit" disabled={saving}>
          {saving ? "Guardando..." : "Guardar Auditoría"}
        </button>
      </form>
    </div>
  );
}
