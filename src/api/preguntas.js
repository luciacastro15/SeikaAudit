import client from "./client";

export async function get_preguntas() {
    const response = await client.get("/preguntas");
    return response.data;
}