const API_URL = import.meta.env.VITE_API_URL;
export async function get_auditorias_by_auditor(auditor_id, token) {
    const url = `${API_URL}/auditorias/auditor/${auditor_id}/detalle`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    let data = null;
    try {
        data = await response.json();
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
    if (!response.ok) {
        const errorMessage = data && data.message ? data.message : 'Failed to fetch auditorias';
        throw new Error(errorMessage);
    }
    return data;
}