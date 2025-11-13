import db from "#db/client";
import bcrypt from "bcrypt";

export async function createUser({ email, password, role_id }) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const SQL = role_id
    ? `INSERT INTO users (email, password, role_id) VALUES ($1, $2, $3) RETURNING *`
    : `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`;

  const params = role_id
    ? [email, hashedPassword, role_id]
    : [email, hashedPassword];

  const {
    rows: [user],
  } = await db.query(SQL, params);
  return user;
}

export async function getUserByUsernameAndPassword(email, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE email = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [email]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function getEmployees() {
  const SQL = `
  SELECT id, email, role_id
  FROM users
  WHERE role_id <= 3
  `;
  const { rows: employees } = await db.query(SQL);
  return employees;
}

export async function getUserById(id) {
  const sql = `
  SELECT id , email, role_id
  FROM users
  WHERE id = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [id]);
  return user;
}

export async function updateUserRole(userId, roleId) {
  const sql = `
    UPDATE users 
    SET role_id = $1 
    WHERE id = $2 
    RETURNING id, email, role_id
  `;
  const { rows: [user] } = await db.query(sql, [roleId, userId]);
  return user;
}

export async function updateRole_Id(id, newRoleId) {
  if (!Number.isInteger(newRoleId) || newRoleId < 1 || newRoleId > 4) {
    throw new Error("role_id must be a integer between 1 and 4");
  }
  const SQL = `
  UPDATE users
  SET role_id = $1
  WHERE id = $2
  RETURNING id, email, role_id
  `;
  const {
    rows: [updatedEmployeeRole],
  } = await db.query(SQL, [newRoleId, id]);

  if (!updatedEmployeeRole) {
  throw new Error("User not found");
}

  return updatedEmployeeRole
}