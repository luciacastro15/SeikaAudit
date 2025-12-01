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

export async function delete_usuario(id) {
  const response = await client.delete(`/usuarios/${id}`);
  return response.data;
}

export async function get_usuarios() {
  const response = await client.get(`/usuarios`);
  return response.data;
}