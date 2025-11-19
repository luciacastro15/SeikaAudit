import client from "./client";
export async function get_concesionarios() {
    const response = await client.get('/concesionarios');
    return response.data;
}
