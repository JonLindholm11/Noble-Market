import { createCustomer_Category_Pricing } from "#db/queries/customer_category_pricing";

export async function seedCustomer_Category_Pricing() {
  const customer_category_pricing = [
  {
    customer_id: 1,
    product_category: "construction tools",
    price_tier_id: 3,
  },
  {
    customer_id: 1,
    product_category: "electronics",
    price_tier_id: 2,
  },
  {
    customer_id: 1,
    product_category: "vehicles",
    price_tier_id: 4,
  },
  {
    customer_id: 2,
    product_category: "food",
    price_tier_id: 1,
  },
  {
    customer_id: 3,
    product_category: "construction tools",
    price_tier_id: 2,
  },
  {
    customer_id: 3,
    product_category: "electronics",
    price_tier_id: 3,
  },
  {
    customer_id: 3,
    product_category: "food",
    price_tier_id: 1,
  },
  {
    customer_id: 3,
    product_category: "sewing notions",
    price_tier_id: 2,
  },
  {
    customer_id: 3,
    product_category: "vehicles",
    price_tier_id: 4,
  },
  {
    customer_id: 4,
    product_category: "electronics",
    price_tier_id: 1,
  },
  {
    customer_id: 4,
    product_category: "sewing notions",
    price_tier_id: 3,
  },
  {
    customer_id: 6,
    product_category: "construction tools",
    price_tier_id: 1,
  },
  {
    customer_id: 6,
    product_category: "electronics",
    price_tier_id: 2,
  },
  {
    customer_id: 6,
    product_category: "food",
    price_tier_id: 1,
  },
  {
    customer_id: 6,
    product_category: "vehicles",
    price_tier_id: 3,
  },
  {
    customer_id: 7,
    product_category: "vehicles",
    price_tier_id: 4,
  },
  {
    customer_id: 8,
    product_category: "food",
    price_tier_id: 2,
  },
  {
    customer_id: 8,
    product_category: "sewing notions",
    price_tier_id: 1,
  },
  {
    customer_id: 8,
    product_category: "construction tools",
    price_tier_id: 3,
  },
  {
    customer_id: 9,
    product_category: "electronics",
    price_tier_id: 4,
  },
  {
    customer_id: 9,
    product_category: "vehicles",
    price_tier_id: 2,
  },
  {
    customer_id: 11,
    product_category: "construction tools",
    price_tier_id: 4,
  },
  {
    customer_id: 11,
    product_category: "electronics",
    price_tier_id: 3,
  },
  {
    customer_id: 11,
    product_category: "food",
    price_tier_id: 2,
  },
  {
    customer_id: 11,
    product_category: "sewing notions",
    price_tier_id: 4,
  },
  {
    customer_id: 11,
    product_category: "vehicles",
    price_tier_id: 1,
  },
  {
    customer_id: 12,
    product_category: "sewing notions",
    price_tier_id: 2,
  },
  {
    customer_id: 13,
    product_category: "construction tools",
    price_tier_id: 1,
  },
  {
    customer_id: 13,
    product_category: "food",
    price_tier_id: 3,
  },
  {
    customer_id: 13,
    product_category: "vehicles",
    price_tier_id: 2,
  },
  {
    customer_id: 14,
    product_category: "electronics",
    price_tier_id: 1,
  },
  {
    customer_id: 14,
    product_category: "food",
    price_tier_id: 1,
  },
  {
    customer_id: 14,
    product_category: "sewing notions",
    price_tier_id: 3,
  },
  {
    customer_id: 14,
    product_category: "vehicles",
    price_tier_id: 4,
  },

  {
    customer_id: 15,
    product_category: "construction tools",
    price_tier_id: 2,
  },
  {
    customer_id: 15,
    product_category: "electronics",
    price_tier_id: 2,
  },
];
  for (const ccp of customer_category_pricing) {
    await createCustomer_Category_Pricing(ccp);
  }
  console.log("completed seeding customer category pricing");
}
