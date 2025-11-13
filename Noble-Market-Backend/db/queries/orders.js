import db from "#db/client";

export async function createOrders({
  customer_id,
  total_amount,
  order_status,
  assigned_service_rep,
  created_date
}) {
  const SQL = created_date
    ? `INSERT INTO orders
       (customer_id, total_amount, order_status, assigned_service_rep, created_date)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`
    : `INSERT INTO orders
       (customer_id, total_amount, order_status, assigned_service_rep)
       VALUES ($1, $2, $3, $4)
       RETURNING *`;
  
  const values = created_date
    ? [customer_id, total_amount, order_status, assigned_service_rep, created_date]
    : [customer_id, total_amount, order_status, assigned_service_rep];
  
  const { rows: orders } = await db.query(SQL, values);
  return orders;
}

export async function getOrdersWithDetails() {
  const SQL = `
    SELECT
      orders.id,
      orders.total_amount,
      orders.order_status,
      orders.created_date,
      customers.id AS customer_id,
      customers.company_name,
      customers.contact_name,
      customers.email AS customer_email,
      service_rep.id AS service_rep_id,
      service_rep.email AS service_rep_email,
      service_rep.role_id
    FROM orders
    LEFT JOIN customers ON orders.customer_id = customers.id
    LEFT JOIN users AS service_rep ON orders.assigned_service_rep = service_rep.id
  `;

  const { rows } = await db.query(SQL);
  return rows;
}

export async function getOrders() {
  const SQL = `
    SELECT * FROM orders
    `;
  const { rows: orders } = await db.query(SQL);
  return orders;
}

export async function getOrdersByCustomerId(customer_id) {
  const SQL = `
    SELECT * FROM orders
    WHERE customer_id = $1
    `;
  const { rows: ci } = await db.query(SQL, [customer_id]);
  return ci;
}

export async function getOrdersByTotal_Amount(total_amount) {
  const SQL = `
    SELECT * FROM orders
    WHERE total_amount = $1
    `;
  const { rows: ta } = await db.query(SQL, total_amount);
  return ta;
}

export async function getOrdersByOrder_Status(order_status) {
  const SQL = `
    SELECT * FROM orders
    WHERE order_status = $1
    `;
  const { rows: os } = await db.query(SQL, order_status);
  return os;
}

export async function getOrdersByAssigned_Service_Rep(assigned_salesman_id) {
  const SQL = `
    SELECT * FROM orders
    WHERE assigned_service_rep = $1
    `;
  const { rows: asr } = await db.query(SQL, [assigned_salesman_id]
  );
  return asr;
}

export async function getOrdersByCreated_Date(created_date) {
  const SQL = `
    SELECT * FROM orders
    WHERE created_date = $1
    `;
  const { rows: cd } = await db.query(SQL, created_date);
  return cd;
}

export async function getOrdersById(id) {
  const SQL = `
    SELECT * FROM orders
    WHERE id = $1
    `;
  const { rows: oid } = await db.query(SQL, [id]);
  return oid;
}

export async function updateOrderStatus(id, new_order_status) {
  const SQL = `
    UPDATE orders
    SET order_status = $1
    WHERE id = $2
    RETURNING id, order_status
  `;
  
  const { rows: [orderStatus] } = await db.query(SQL, [new_order_status, id]);

  if (!orderStatus) {
    throw new Error("order status not found");
  }
  
  return orderStatus;
}