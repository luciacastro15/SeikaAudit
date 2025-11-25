import client from "./client";
export async function get_concesionarios() {
    const response = await client.get('/concesionarios');
    return response.data;
}

export async function create_concesionarios(formData) {
    const response = await client.post(
        "/concesionarios",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
}


export async function update_concesionarios(id, formData) {
    formData.append("_method", "PUT");

    const response = await client.post(
        `/concesionarios/${id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
}


export async function delete_concesionarios(id) {
    return client.delete(`/concesionarios/${id}`).then(res => res.data);
}
