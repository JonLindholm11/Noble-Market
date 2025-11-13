import db from "#db/client";

export async function createPriceCategories({
  category_name,
  category_description,
  discount_percentage,
  tier_level
}) {
  const SQL = `
    INSERT INTO price_categories (category_name, category_description, discount_percentage, tier_level)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
  const { rows: price_categories } = await db.query(SQL, [
    category_name,
    category_description,
    discount_percentage,
    tier_level,
  ]);
  return price_categories;
}

export async function getPriceCategoryByDiscountPercentage(
  discount_percentage
) {
  const SQL = `
    SELECT * FROM price_categories WHERE discount_percentage = $1
    `;
  const { rows: dp } = await db.query(SQL, [discount_percentage]);
  return dp;
}

export async function getPriceCategoryById(id) {
  const SQL = `
    SELECT * FROM price_categories WHERE discount_percentage = $1
    `;
  const { rows: pid } = db.query(SQL, [id]);
  return pid;
}
