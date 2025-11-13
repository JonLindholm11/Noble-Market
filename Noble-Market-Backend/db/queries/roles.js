import db from "#db/client";

export async function createRoles({ role_name, description, role_level }) {
  const SQL = `
    INSERT INTO roles (role_name, description, role_level) 
    VALUES ($1, $2, $3)
    RETURNING *
    `;
  const { rows } = await db.query(SQL, [role_name, description, role_level]);
  return rows[0];
}

export async function getRoleByRoleLevel(role_level) {
  const SQL = `
    SELECT * FROM roles WHERE role_level = $1
    `;
  const { rows: rl } = await db.query(SQL, [role_level]);
  if (!role_level) return null;
  return rl;
}

export async function getRolesById(id) {
  const SQL = `
    SELECT * FROM roles WHERE id = $1
    `;
  const { roles: ri } = await db.query(SQL, [role_id]);
  return ri;
}
