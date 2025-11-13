import { createPriceCategories } from "#db/queries/price_categories";

export async function seedPrice_Categories() {
  const price_categories = [
    {
      category_name: "standard",
      category_description: "base price for all items",
      discount_percentage: 0.0,
      tier_level: 1,
    },
    {
      category_name: "preferred",
      category_description:
        "preferred customer orders over threshold of item in a month",
      discount_percentage: 5.0,
      tier_level: 2,
    },
    {
      category_name: "bulk",
      category_description:
        "bulk customer orders over threshold of item in a month",
      discount_percentage: 10.0,
      tier_level: 3,
    },
    {
      category_name: "wholesale",
      category_description:
        "wholesale customer orders over threshold of item in a month",
      discount_percentage: 15.0,
      tier_level: 4,
    },
  ];
  for (const price_category of price_categories) {
      await createPriceCategories(price_category);
    }
    console.log("completed seeding price categories");
}