import db from "#db/client";

export async function createCustomer_Category_Pricing({
  customer_id,
  product_category,
  price_tier_id,
}) {
  const SQL = `
    INSERT INTO customer_category_pricing
    (customer_id, product_category, price_tier_id)
    VALUES ($1, $2, $3)
    RETURNING *
    `;
  const { rows } = await db.query(SQL, [
    customer_id,
    product_category,
    price_tier_id,
  ]);
  return rows[0];
}

export async function joinCustomerCategoryPricing() {
  const SQL = `
    SELECT
      ccp.id,
      ccp.product_category,
      customers.id AS customer_id,
      customers.company_name,
      customers.contact_name,
      customers.email,
      price_categories.id AS tier_id,
      price_categories.category_name,
      price_categories.discount_percentage,
      price_categories.tier_level
    FROM customer_category_pricing ccp
    LEFT JOIN customers ON ccp.customer_id = customers.id
    LEFT JOIN price_categories ON ccp.price_tier_id = price_categories.id
  `;
  const { rows } = await db.query(SQL);
  return rows;
}

export async function getCustomerCategoryPricing() {
  const SQL = `
    SELECT
      ccp.id,
      ccp.product_category,
      ccp.customer_id,
      ccp.price_tier_id,
      customers.company_name,
      customers.contact_name,
      customers.email,
      customers.user_id,
      price_categories.category_name,
      price_categories.discount_percentage,
      price_categories.tier_level
    FROM customer_category_pricing ccp
    LEFT JOIN customers ON ccp.customer_id = customers.id
    LEFT JOIN price_categories ON ccp.price_tier_id = price_categories.id
  `;
  const { rows: customerPricing } = await db.query(SQL);
  return customerPricing;
}

export async function getCustomerCategoryPricingByCustomerId(customer_id) {
  const SQL = `
    SELECT
      ccp.id,
      ccp.product_category,
      ccp.customer_id,
      ccp.price_tier_id,
      customers.company_name,
      customers.contact_name,
      customers.email,
      customers.user_id,
      price_categories.category_name,
      price_categories.discount_percentage,
      price_categories.tier_level
    FROM customer_category_pricing ccp
    LEFT JOIN customers ON ccp.customer_id = customers.id
    LEFT JOIN price_categories ON ccp.price_tier_id = price_categories.id
    WHERE ccp.customer_id = $1
  `;
  const { rows: customerPricingByCustomerId } = await db.query(SQL, [customer_id]);
  return customerPricingByCustomerId;
}

export async function updateCustomerCategoryPricing(id, new_price_tier_id) {
  if (!Number.isInteger(new_price_tier_id) || new_price_tier_id < 1 || new_price_tier_id > 4) {
    throw new Error("price tier id must be a integer between 1 and 4")
  }
  const SQL = `
  UPDATE customer_category_pricing
  SET price_tier_id = $1
  WHERE id = $2
  RETURNING id, customer_id, product_category
  `;
  const {
    rows : [updatedCustomerPricing]
  } = await db.query(SQL, [new_price_tier_id, id])

  if (!updatedCustomerPricing) {
    throw new Error("customer category pricing not found")
  }
  return updatedCustomerPricing
}
