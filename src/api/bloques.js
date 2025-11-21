import client from "./client";

export async function get_bloques() {
    const response = await client.get("/bloques");
    return response.data;
}