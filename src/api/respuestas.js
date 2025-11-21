import client from "./client";

export async function create_respuesta(respuestaData) {
    const response = await client.post("/respuestas", respuestaData);
    return response.data;
}