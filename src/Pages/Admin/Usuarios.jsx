import { useState, useEffect } from "react";
import { get_usuarios, delete_usuario } from "../../api/usuarios";
import { use } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [eliminando, setEliminando] = useState(null);

  async function cargar_usuarios(params) {
    try {
        setCargando(true); 
        setError("");
        const datos = await get_usuarios();
        setUsuarios(datos);
    } catch (error) {
        console.error(error);
        setError("Error al cargar los usuarios");
    } finally {
        setCargando(false);
    }
  }

  useEffect(() => {
    cargar_usuarios();
  }, []);

  async function handle_delete(id) {
    const confirmar = window.confirm("¿Quiere eliminar el usuario?");
    if (!confirmar) {
        return;
    }
    try {
        setEliminando(id);
        await delete_usuario(id);
        await cargar_usuarios();
    } catch (error) {
        console.error(error);
        setError("Error al eliminar el usuario");
    }finally {
        setEliminando(null);
    }
  }
}


