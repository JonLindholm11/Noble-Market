import db from "#db/client";

export async function createSpecial_Pricing({
  product_id,
  special_price,
  start_date,
  end_date,
  created_by_user_id,
}) {
  const SQL = `
    INSERT INTO special_pricing
    (product_id, special_price, start_date, end_date, created_by_user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows } = await db.query(SQL, [
    product_id,
    special_price,
    start_date,
    end_date,
    created_by_user_id,
  ]);
  return rows[0];
}

export async function joinSpecialPricing() {
  const SQL = `
    SELECT
      special_pricing.id,
      special_pricing.special_price,
      special_pricing.start_date,
      special_pricing.end_date,
      products.id AS product_id,
      products.product_name,
      products.product_category,
      products.product_description,
      products.basic_price,
      products.product_img,
      created_by.id AS created_by_user_id,
      created_by.email AS created_by_email,
      created_by.role_id
    FROM special_pricing
    LEFT JOIN products ON special_pricing.product_id = products.id
    LEFT JOIN users AS created_by ON special_pricing.created_by_user_id = created_by.id
  `;

  const { rows: joinSpecialPricing } = await db.query(SQL);
  return joinSpecialPricing;
}

export async function getSpecial_Pricing() {
  const SQL = `
    SELECT 
      sp.*,
      p.product_name
    FROM special_pricing sp
    JOIN products p ON sp.product_id = p.id
  `;
  const { rows } = await db.query(SQL);
  return rows;
}

export async function getActiveSpecials() {
  const SQL = `
  SELECT * FROM special_pricing
  WHERE start_date <= NOW()
  AND end_date >= NOW()
  `
  const { rows : activeSpecial } = db.query(SQL)
  return activeSpecial
}

export async function getSpecial_PricingById(id) {
  const SQL = `
    SELECT * FROM special_pricing
    WHERE id = $1
    `;
  const { rows } = await db.query(SQL, [id]);
  return rows;
}
