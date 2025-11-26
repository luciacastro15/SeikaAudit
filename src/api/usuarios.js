import client from "./client";
export async function get_jefes() {
  const response = await client.get("/usuarios", {
    params: { rol_id: 3 },
  });
  return response.data;
}

export async function update_plan(plan) {
  const response = await client.patch("/mi-plan", {
    plan
  });
  return response.data;
}
