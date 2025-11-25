import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  get_concesionarios,
  update_concesionarios,
} from "../../api/concesionarios";

import "../../css/Perfiles/Jefes/GestionConcesionarios.css";

export default function EditarConcesionario() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
    marca: "",
    jefe_id: "",
  });

  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConce = async () => {
      try {
        const data = await get_concesionarios();
        const conce = data.concesionarios.find((c) => c.id == id);
        console.log(conce);
        if (!conce) {
          setError("Concesionario no encontrado");
          return;
        }

        setFormData({
          nombre: conce.nombre,
          ubicacion: conce.ubicacion,
          telefono: conce.telefono,
          marca: conce.marca,
          jefe_id: conce.jefe_id,
        });

        setPreview(
          conce.img
            ? `${import.meta.env.VITE_IMG}/${conce.img}`
            : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        );
      } catch (err) {
        setError("Error al cargar concesionario");
      } finally {
        setLoading(false);
      }
    };

    fetchConce();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("nombre", formData.nombre);
      data.append("ubicacion", formData.ubicacion);
      data.append("telefono", formData.telefono);
      data.append("marca", formData.marca);
      data.append("jefe_id", formData.jefe_id);

      if (img) data.append("img", img);

      await update_concesionarios(id, data);
      navigate("/jefes/concesionarios");
    } catch (err) {
      setError("Error al actualizar");
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="concesionarios-container">
      <h1 className="concesionarios-title">Editar Concesionario</h1>

      <form className="form-container" onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Nombre</label>
        <input name="nombre" value={formData.nombre} onChange={handleChange} />

        <label>Ubicación</label>
        <input
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
        />

        <label>Teléfono</label>
        <input
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />

        <label>Marca</label>
        <input name="marca" value={formData.marca} onChange={handleChange} />

        <label>ID Jefe</label>
        <input
          name="jefe_id"
          value={formData.jefe_id}
          onChange={handleChange}
        />

        <label>Nueva Foto (opcional)</label>
        <input type="file" onChange={handleImg} />

        {preview && (
          <img src={preview} alt="preview" className="concesionario-img" />
        )}

        <button className="btn-edit">Guardar Cambios</button>

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
