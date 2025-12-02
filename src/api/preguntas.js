import client from "./client";

// Obtener todas las preguntas
export async function get_preguntas() {
    const response = await client.get("/preguntas");
    return response.data;
}

// Obtener una pregunta por ID
export async function get_pregunta(id) {
    const response = await client.get(`/preguntas/${id}`);
    return response.data;
}

// Crear una nueva pregunta
export async function create_pregunta(data) {
    const response = await client.post("/preguntas", data);
    return response.data;
}

// Actualizar pregunta
export async function update_pregunta(id, data) {
    const response = await client.put(`/preguntas/${id}`, data);
    return response.data;
}

// Eliminar pregunta
export async function delete_pregunta(id) {
    const response = await client.delete(`/preguntas/${id}`);
    return response.data;
}
