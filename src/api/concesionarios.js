import client from "./client";
export async function get_concesionarios() {
    const response = await client.get('/concesionarios');
    return response.data;
}

export async function create_concesionarios(concesionario) {
    const response = await client.post("/concesionarios", concesionario);
    return response.data;
}

export async function update_concesionarios(id, concesionario) {
    const response = await client.post(`/concesionarios/${id}`, concesionario);
    return response.data;
}

export async function delete_concesionarios(id) {
    const response = await client.post(`/concesionarios/${id}`);
    return response.data;
}
