// import { useState, useEffect } from "react";
// import { get_usuarios, delete_usuario } from "../../api/usuarios";
// import { use } from "react";

// export default function Usuarios() {
//   const [usuarios, setUsuarios] = useState([]);
//   const [cargando, setCargando] = useState(true);
//   const [error, setError] = useState("");
//   const [eliminando, setEliminando] = useState(null);

//   async function cargar_usuarios(params) {
//     try {
//         setCargando(true); 
//         setError("");
//         const datos = await get_usuarios();
//         setUsuarios(datos);
//     } catch (error) {
//         console.error(error);
//         setError("Error al cargar los usuarios");
//     } finally {
//         setCargando(false);
//     }
//   }

//   useEffect(() => {
//     cargar_usuarios();
//   }, []);

//   async function handle_delete(id) {
//     const confirmar = window.confirm("¿Quiere eliminar el usuario?");
//     if (!confirmar) {
//         return;
//     }
//     try {
//         setEliminando(id);
//         await delete_usuario(id);
//         await cargar_usuarios();
//     } catch (error) {
//         console.error(error);
//         setError("Error al eliminar el usuario");
//     }finally {
//         setEliminando(null);
//     }
//   }
//   function render_rol(usuario) {
//     return usuario.rol.nombre;
//   }


// }


import { useState, useEffect } from "react";
import { get_usuarios, delete_usuario } from "../../api/usuarios";
import '../../css/Perfiles/Admin/Usuarios.css';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [eliminando, setEliminando] = useState(null);

  async function cargar_usuarios() {
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
    if (!confirmar) return;

    try {
      setEliminando(id);
      await delete_usuario(id);
      await cargar_usuarios();
    } catch (error) {
      console.error(error);
      setError("Error al eliminar el usuario");
    } finally {
      setEliminando(null);
    }
  }

  function render_rol(usuario) {
    return usuario.rol?.nombre || "Sin rol";
  }

  return (
    <div className="usuarios-container">
      <h2>Lista de usuarios</h2>

      {cargando && <p className="mensaje">Cargando usuarios...</p>}
      {error && <p className="mensaje error">{error}</p>}
      {!cargando && usuarios.length === 0 && (
        <p className="mensaje">No hay usuarios registrados.</p>
      )}

      {!cargando && usuarios.length > 0 && (
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{render_rol(usuario)}</td>
                <td>
                  <button
                    className="btn-borrar"
                    onClick={() => handle_delete(usuario.id)}
                    disabled={eliminando === usuario.id}
                    title="Eliminar usuario"
                  >
                    {eliminando === usuario.id ? "⏳" : "🗑️"}
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
