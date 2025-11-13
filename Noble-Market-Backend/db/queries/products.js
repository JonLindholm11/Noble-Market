import db from "#db/client";

export async function createProducts({
  product_name,
  product_category,
  product_description,
  basic_price,
  product_img,
}) {
  const SQL = `
    INSERT INTO products
        (product_name, product_category, product_description, basic_price, product_img)
    VALUES
        ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  const { rows } = await db.query(
    SQL,
    [product_name,
    product_category,
    product_description,
    basic_price,
    product_img]
  );
  return rows;
}

export async function getProducts() {
  const SQL = `
    SELECT * FROM products
    `;
  const { rows } = await db.query(SQL);
  return rows;
}

export async function getProductsByCategory(product_category) {
  const SQL = `
    SELECT * FROM products
    WHERE product_category = $1
    `;
  const { rows: products_category } = await db.query(SQL, [product_category]);
  return products_category;
}

export async function getProductsByName(product_name) {
  const SQL = `
    SELECT * FROM products
    WHERE product_name = $1
    `;
  const { rows: pn } = db.query(SQL, product_name);
  return pn;
}

export async function getProductsByDescription(product_description) {
  const SQL = `
    SELECT * FROM products
    WHERE product_description = $1
    `;
  const { rows: pd } = db.query(SQL, product_description);
  return pd;
}

export async function getProductsByBasicPrice(basic_price) {
  const SQL = `
    SELECT * FROM products
    WHERE basic_price = $1
    `;
  const { rows: bp } = db.query(SQL, basic_price);
  return bp;
}

export async function getProductsByProductImg(product_img) {
  const SQL = `
    SELECT * FROM products
    WHERE product_img = $1
    `;
  const { rows: pi } = db.query(SQL, product_img);
  return pi;
}

export async function getProductsById(id) {
  const SQL = `
    SELECT * FROM products
    WHERE id = $1
    `;
  const { rows: pi } = await db.query(SQL, [id]);
  return pi;
}
