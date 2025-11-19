import client from "./client";
export async function get_jefes() {
    const response = await client.get('/usuarios', {
        params: { rol_id: 3 }
    });
    return response.data;
}