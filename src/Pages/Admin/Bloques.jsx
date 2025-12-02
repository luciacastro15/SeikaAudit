import { useState, useEffect } from "react";
import {
  get_bloques,
  create_bloque,
  update_bloque,
  delete_bloque
} from "../../api/bloques";

import '../../css/Perfiles/Admin/Bloques.css';

export default function Bloques() {
  const [bloques, setBloques] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Estado para formulario
  const [modoEditar, setModoEditar] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
  });
  const [editId, setEditId] = useState(null);

  async function cargarBloques() {
    try {
      setCargando(true);
      const data = await get_bloques();
      setBloques(data);
    } catch (err) {
      setError("Error al cargar los bloques");
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarBloques();
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
        await update_bloque(editId, formData);
      } else {
        await create_bloque(formData);
      }

      setFormData({ nombre: ""});
      setModoEditar(false);
      setEditId(null);
      cargarBloques();

    } catch (err) {
      setError("Error al guardar el bloque");
    }
  }

  function handleEditar(bloque) {
    setModoEditar(true);
    setEditId(bloque.id);
    setFormData({
      nombre: bloque.nombre,
    });
  }

  async function handleEliminar(id) {
    const confirmar = window.confirm("¿Eliminar este bloque?");
    if (!confirmar) return;

    try {
      await delete_bloque(id);
      cargarBloques();
    } catch (err) {
      setError("Error al eliminar el bloque");
    }
  }

  return (
    <div className="bloques-container">
      <h2>Gestión de Bloques</h2>

      {error && <p className="error">{error}</p>}

      {/* FORMULARIO */}
      <form className="bloque-form" onSubmit={handleSubmit}>
        <h3>{modoEditar ? "Editar bloque" : "Crear bloque"}</h3>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-guardar">
          {modoEditar ? "Actualizar" : "Crear"}
        </button>

        {modoEditar && (
          <button
            type="button"
            className="btn-cancelar"
            onClick={() => {
              setModoEditar(false);
              setFormData({ nombre: ""});
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
        <table className="tabla-bloques">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {bloques.map((bloque) => (
              <tr key={bloque.id}>
                <td>{bloque.id}</td>
                <td>{bloque.nombre}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => handleEditar(bloque)}
                  >
                    ✏️
                  </button>

                  <button
                    className="btn-borrar"
                    onClick={() => handleEliminar(bloque.id)}
                  >
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
