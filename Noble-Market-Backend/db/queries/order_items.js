import db from "#db/client";

export async function createOrder_Items({
  order_id,
  product_id,
  quantity,
  unit_price,
  total_price
}) {
  const SQL = `
    INSERT INTO order_items
    (order_id, product_id, quantity, unit_price, total_price)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows: order_items } = await db.query(
    SQL,
    [order_id,
    product_id,
    quantity,
    unit_price,
    total_price]
  );
  return order_items;
}

export async function joinOrderItems() {
  const SQL = `
    SELECT
      order_items.id,
      order_items.order_id,
      order_items.product_id,
      order_items.quantity,
      order_items.unit_price,
      orders.id AS order_id,
      orders.order_date,
      orders.total_amount,
      orders.order_status,
      products.id AS product_id,
      products.product_name,
      products.product_category,
      products.product_description,
      products.basic_price,
      products.product_img
    FROM order_items
    LEFT JOIN orders ON order_items.order_id = orders.id
    LEFT JOIN products ON order_items.product_id = products.id
  `;

  const { rows: joinOrderItemsData } = await db.query(SQL);
  return joinOrderItemsData;
}

export async function getOrder_Items() {
  const SQL = `
    SELECT * FROM order_items
    `;
  const { rows: order_items } = await db.query(SQL)
  return order_items;
}

export async function getOrder_ItemsByOrder_Id(order_id) {
  const SQL = `
    SELECT
      order_items.id,
      order_items.order_id,
      order_items.product_id,
      order_items.quantity,
      order_items.unit_price,
      order_items.total_price,
      products.product_name,
      products.product_category,
      products.product_description
    FROM order_items
    LEFT JOIN products ON order_items.product_id = products.id
    WHERE order_items.order_id = $1
  `;
  const { rows: oi } = await db.query(SQL, [order_id]);
  return oi;
}

export async function getOrder_ItemsByProduct_Id(product_id) {
  const SQL = `
    SELECT * FROM order_items
    WHERE product_id = $1
    `;
  const { rows: pi } = await db.query(SQL, product_id);
  return pi;
}

export async function getOrder_ItemsByQuantity(quantity) {
  const SQL = `
    SELECT * FROM order_items
    WHERE quantity = $1
    `;
  const { rows: qty } = await db.query(SQL, quantity);
  return qty;
}

export async function getOrder_ItemsByUnit_Price(unit_price) {
  const SQL = `
    SELECT * FROM order_items
    WHERE unit_price = $1
    `;
  const { rows: up } = await db.query(SQL, unit_price);
  return up;
}

export async function getOrder_ItemsByTotal_Price(total_price) {
  const SQL = `
    SELECT * FROM order_items
    WHERE total_price = $1
    `;
  const { rows: tp } = await db.query(SQL, total_price);
  return tp;
}

export async function getOrder_ItemsById(id) {
  const SQL = `
    SELECT * FROM order_items
    WHERE id = $1
    `;
  const { rows: oiid } = await db.query(SQL, [id]);
  return oiid;
}
