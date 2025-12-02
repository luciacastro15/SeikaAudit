import client from "./client";

// Obtener todos los bloques
export async function get_bloques() {
    const response = await client.get("/bloques");
    return response.data;
}

// Obtener un bloque por ID
export async function get_bloque(id) {
    const response = await client.get(`/bloques/${id}`);
    return response.data;
}

// Crear un nuevo bloque
export async function create_bloque(data) {
    const response = await client.post("/bloques", data);
    return response.data;
}

// Actualizar un bloque existente
export async function update_bloque(id, data) {
    const response = await client.put(`/bloques/${id}`, data);
    return response.data;
}

// Eliminar un bloque
export async function delete_bloque(id) {
    const response = await client.delete(`/bloques/${id}`);
    return response.data;
}
