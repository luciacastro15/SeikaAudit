import { useState } from 'react';
import '../../css/FormularioAuditoria.css';

export function FormularioAuditoria({ onSubmit }) {
  const [form, setForm] = useState({
    concesionario: '',
    auditor: '',
    jefe: '',
    fecha: '',
    respuestas: [{ pregunta: '', respuesta: '', comentario: '' }],
  });

  const handleChange = (e, index = null, field = null) => {
    if (index !== null) {
      const nuevasRespuestas = [...form.respuestas];
      nuevasRespuestas[index][field] = e.target.value;
      setForm({ ...form, respuestas: nuevasRespuestas });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const agregarRespuesta = () => {
    setForm({
      ...form,
      respuestas: [...form.respuestas, { pregunta: '', respuesta: '', comentario: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    alert('Auditoría enviada correctamente');
  };

  return (
    <div className="formulario-container">
      <h2>Registrar Nueva Auditoría</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label>
          Concesionario:
          <input type="text" name="concesionario" value={form.concesionario} onChange={handleChange} required />
        </label>
        <label>
          Auditor:
          <input type="text" name="auditor" value={form.auditor} onChange={handleChange} required />
        </label>
        <label>
          Jefe:
          <input type="text" name="jefe" value={form.jefe} onChange={handleChange} required />
        </label>
        <label>
          Fecha:
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        </label>

        <fieldset>
          <legend>Respuestas</legend>
          {form.respuestas.map((r, i) => (
            <div key={i} className="respuesta-bloque">
              <input
                type="text"
                placeholder="Pregunta"
                value={r.pregunta}
                onChange={(e) => handleChange(e, i, 'pregunta')}
                required
              />
              <input
                type="text"
                placeholder="Respuesta"
                value={r.respuesta}
                onChange={(e) => handleChange(e, i, 'respuesta')}
                required
              />
              <input
                type="text"
                placeholder="Comentario"
                value={r.comentario}
                onChange={(e) => handleChange(e, i, 'comentario')}
              />
            </div>
          ))}
          <button type="button" onClick={agregarRespuesta} className="btn-secundario">
            + Añadir otra respuesta
          </button>
        </fieldset>

        <button type="submit" className="btn-principal">Guardar Auditoría</button>
      </form>
    </div>
  );
}