import { useEffect, useState } from "react";
import {
  get_preguntas,
  create_pregunta,
  update_pregunta,
  delete_pregunta
} from "../../api/preguntas";

import { get_bloques } from "../../api/bloques";
import '../../css/Perfiles/Admin/Preguntas.css';

export default function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);
  const [bloques, setBloques] = useState([]);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const [modoEditar, setModoEditar] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    texto: "",
    bloque_id: ""
  });

  async function cargarDatos() {
    try {
      setCargando(true);

      const [preguntasRes, bloquesRes] = await Promise.all([
        get_preguntas(),
        get_bloques()
      ]);

      setPreguntas(preguntasRes);
      setBloques(bloquesRes);
    } catch (err) {
      console.error(err);
      setError("Error al cargar los datos");
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarDatos();
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (modoEditar) {
        await update_pregunta(editId, formData);
      } else {
        await create_pregunta(formData);
      }

      setFormData({ texto: "", bloque_id: "" });
      setModoEditar(false);
      setEditId(null);
      cargarDatos();

    } catch (err) {
      setError("Error al guardar la pregunta");
    }
  }

  function handleEditar(pregunta) {
    setModoEditar(true);
    setEditId(pregunta.id);

    setFormData({
      texto: pregunta.texto,
      bloque_id: pregunta.bloque_id
    });
  }

  async function handleEliminar(id) {
    const confirmar = window.confirm("¿Eliminar esta pregunta?");
    if (!confirmar) return;
    try {
      await delete_pregunta(id);
      cargarDatos();
    } catch (err) {
      setError("Error al eliminar la pregunta");
    }
  }

  return (
    <div className="preguntas-container">
      <h2>Gestión de Preguntas</h2>

      {error && <p className="error">{error}</p>}

      {/* FORMULARIO */}
      <form className="pregunta-form" onSubmit={handleSubmit}>
        <h3>{modoEditar ? "Editar pregunta" : "Crear nueva pregunta"}</h3>

        <textarea
          name="texto"
          placeholder="Texto de la pregunta"
          value={formData.texto}
          onChange={handleChange}
          required
        />

        <select
          name="bloque_id"
          value={formData.bloque_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un bloque</option>
          {bloques.map((b) => (
            <option key={b.id} value={b.id}>
              {b.nombre}
            </option>
          ))}
        </select>

        <button type="submit" className="btn-guardar">
          {modoEditar ? "Actualizar" : "Crear"}
        </button>

        {modoEditar && (
          <button
            type="button"
            className="btn-cancelar"
            onClick={() => {
              setModoEditar(false);
              setFormData({ texto: "", bloque_id: "" });
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {/* TABLA */}
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <table className="tabla-preguntas">
          <thead>
            <tr>
              <th>ID</th>
              <th>Texto</th>
              <th>Bloque</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {preguntas.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.texto}</td>
                <td>
                  {bloques.find((b) => b.id === p.bloque_id)?.nombre || "Sin bloque"}
                </td>
                <td>
                  <button className="btn-editar" onClick={() => handleEditar(p)}>
                    ✏️
                  </button>

                  <button className="btn-borrar" onClick={() => handleEliminar(p.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
