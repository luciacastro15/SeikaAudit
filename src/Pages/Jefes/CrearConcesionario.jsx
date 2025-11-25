import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create_concesionarios } from "../../api/concesionarios";
import "../../css/Perfiles/Jefes/GestionConcesionarios.css";

export default function CrearConcesionario() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const [formData, setFormData] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
    marca: "",
    jefe_id: id,
  });

  const [img, setImg] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("ubicacion", formData.ubicacion);
    data.append("telefono", formData.telefono);
    data.append("marca", formData.marca);
    data.append("jefe_id", formData.jefe_id);

    if (img) data.append("img", img);

    await create_concesionarios(data);
    navigate("/jefes/concesionarios");
  };

  return (
    <div className="concesionarios-container">
      <h1 className="concesionarios-title">Crear Concesionario</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="form-container"
      >
        <label>Nombre</label>
        <input name="nombre" onChange={handleChange} required />

        <label>Ubicación</label>
        <input name="ubicacion" onChange={handleChange} required />

        <label>Teléfono</label>
        <input name="telefono" onChange={handleChange} required />

        <label>Marca</label>
        <input name="marca" onChange={handleChange} required />

        <label>Foto (opcional)</label>
        <input type="file" onChange={handleImg} />

        <button className="btn-edit" disabled={loading}>
          {loading ? "Guardando..." : "Crear"}
        </button>

        <button
          type="button"
          className="btn-delete"
          onClick={() => navigate("/jefes/concesionarios")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
