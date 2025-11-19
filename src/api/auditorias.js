import client from "./client";
export async function get_auditorias_by_auditor(auditor_id) {
    try {
        const response = await client.get(`/auditorias/auditor/${auditor_id}/detalle`);
        return response.data;
    } catch (error) {
        console.error("Error fetching auditorías:", error);
        throw error;
    }
}

export async function create_auditoria({auditor_id, jefe_id, concesionario_id}) {
    try {
        const response = await client.post('/auditorias', {
            auditor_id,
            jefe_id,
            concesionario_id
        });
        return response.data;
    } catch (error) {
        console.error("Error creating auditoría:", error);
        throw error;
    }
}