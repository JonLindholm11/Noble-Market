import db from "#db/client";

export async function createCustomers({
  user_id,
  company_name,
  contact_name,
  email,
  assigned_salesman_id = null,
  account_status = "pending",
}) {
  const SQL = `
    INSERT INTO customers (user_id, company_name, contact_name, email, assigned_salesman_id, account_status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const { rows: customers } = await db.query(SQL, [
    user_id,
    company_name,
    contact_name,
    email,
    assigned_salesman_id,
    account_status,
  ]);
  return customers;
}

export async function joinCustomersWithUsers() {
  const SQL = `
    SELECT
      customers.id,
      customers.company_name,
      customers.contact_name,
      customers.email,
      customers.account_status,
      customers.assigned_salesman_id,
      customers.user_id,
      user_account.id AS user_id,
      user_account.email AS user_email,
      user_account.role_id,
      salesman.id AS salesman_id,
      salesman.email AS salesman_email
    FROM customers
    LEFT JOIN users AS user_account ON customers.user_id = user_account.id
    LEFT JOIN users AS salesman ON customers.assigned_salesman_id = salesman.id
  `;

  const { rows: customersWithUsers } = await db.query(SQL);
  return customersWithUsers;
}

export async function getCustomers() {
  const SQL = `SELECT * FROM customers`;
  const { rows } = await db.query(SQL);
  return rows;
}

export async function getCustomerByUser_Id(user_id) {
  const SQL = `
    SELECT * FROM customers WHERE user_id = $1
    `;
  const { rows: customer_id } = await db.query(SQL, [user_id]);
  return customer_id;
}

export async function getCustomerByCompany_Name(company_name) {
  const SQL = `
    SELECT * FROM customers WHERE company_name = $1
    `;
  const { rows: customer_company } = await db.query(SQL, [company_name]);
  return customer_company;
}

export async function getCustomerByContact_Name(contact_name) {
  const SQL = `
    SELECT * FROM customers WHERE contact_name = $1
    `;
  const { rows: customer_contact } = await db.query(SQL, [contact_name]);
  return customer_contact;
}

export async function getCustomerByAssigned_Salesman_Id(assigned_salesman_id) {
  const SQL = `
    SELECT * FROM customers WHERE assigned_salesman_id = $1
    `;
  const { rows: customer_salesman } = await db.query(SQL, [
    assigned_salesman_id,
  ]);
  return customer_salesman;
}

export async function getCustomersById(id) {
  const SQL = `
    SELECT * FROM customers WHERE id = $1
  `;
  const { rows } = await db.query(SQL, [id]);
  return rows;
}

export async function getCustomerByAccountStatus() {
  const SQL = `
    SELECT * FROM customers
  `;

  const { rows } = await db.query(SQL);

  const pending = rows.filter(
    (customer) => customer.account_status === "pending"
  );
  const active = rows.filter(
    (customer) => customer.account_status === "active"
  );

  return { pending, active };
}

export async function updateCustomerAssignedSalesmanId(id, new_assigned_salesman_id) {
  if (!Number.isInteger(new_assigned_salesman_id) || new_assigned_salesman_id <= 1) {
    throw new Error("service rep must be a an integer");
  }
  const SQL = `
  UPDATE customers
  SET assigned_salesman_id = $1
  WHERE id = $2
  RETURNING id, assigned_salesman_id
  `
  const {
    rows : [updatedCustomerRep]
  } = await db.query(SQL, [new_assigned_salesman_id, id])

  if (!updatedCustomerRep) {
    throw new Error("error updating service rep")
  }
  return updatedCustomerRep
}

export async function updateCustomerInfo(id, new_company_name, new_contact_name){
  const SQL = `
  UPDATE customers
  SET company_name = $1,
      contact_name = $2
  WHERE id = $3
  RETURNING id, company_name, contact_name
  `

  const { rows : customerInfo } = await db.query(SQL, [new_company_name, new_contact_name, id])

  if (!customerInfo || customerInfo.length === 0) {
    throw new Error("error updating info")
  }

  return customerInfo
}