import { createSpecial_Pricing } from "#db/queries/special_pricing";

export async function seedSpecial_Pricing() {
  const specialPricing = [
  {
    product_id: 3,
    special_price: 999.99,
    start_date: "2025-11-01",
    end_date: "2025-11-30",
    created_by_user_id: 1,
  },
  {
    product_id: 7,
    special_price: 35.99,
    start_date: "2025-10-28",
    end_date: "2025-11-10",
    created_by_user_id: 1,
  },
  {
    product_id: 12,
    special_price: 19.99,
    start_date: "2025-11-02",
    end_date: "2025-11-20",
    created_by_user_id: 2,
  },
  {
    product_id: 18,
    special_price: 149.99,
    start_date: "2025-10-25",
    end_date: "2025-11-15",
    created_by_user_id: 1,
  },
  {
    product_id: 21,
    special_price: 399.99,
    start_date: "2025-11-01",
    end_date: "2025-12-01",
    created_by_user_id: 2,
  },
  {
    product_id: 1,
    special_price: 15.99,
    start_date: "2025-10-01",
    end_date: "2025-10-31",
    created_by_user_id: 1,
  },
  {
    product_id: 5,
    special_price: 1.99,
    start_date: "2025-09-15",
    end_date: "2025-10-15",
    created_by_user_id: 2,
  },
  {
    product_id: 9,
    special_price: 6.50,
    start_date: "2025-11-10",
    end_date: "2025-11-25",
    created_by_user_id: 1,
  },
  {
    product_id: 14,
    special_price: 3.99,
    start_date: "2025-11-15",
    end_date: "2025-11-30",
    created_by_user_id: 2,
  },
  {
    product_id: 20,
    special_price: 69.99,
    start_date: "2025-08-01",
    end_date: "2025-09-30",
    created_by_user_id: 1,
  },
];
  for (const specialPrice of specialPricing) {
    await createSpecial_Pricing(specialPrice)
  }
  console.log("finished seeding special pricing")
}
