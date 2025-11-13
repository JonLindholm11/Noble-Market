import db from "./client.js";

import { seedRoles } from "./seed/roles_seed.js";
import { seedUsers } from "./seed/users_seed.js";
import { seedPrice_Categories } from "./seed/price_categories_seed.js";
import { seedCustomers } from "./seed/customers_seed.js";
import { seedProducts } from "./seed/products_seed.js";
import { seedCustomer_Category_Pricing } from "./seed/customer_category_pricing_seed.js";
import { seedSpecial_Pricing } from "./seed/special_pricing_seed.js";
import { seedOrders } from "./seed/orders_seed.js";
import { seedOrder_Items } from "./seed/order_items_seed.js";

async function seedDatabase() {
  try {
    await db.connect();

    await seedRoles();
    console.log("Roles seeded");

    await seedUsers();
    console.log("Users seeded");

    await seedPrice_Categories();
    console.log("Price categories seeded");

    await seedCustomers();
    console.log("Customers seeded");

    await seedProducts();
    console.log("Products seeded");

    await seedCustomer_Category_Pricing();
    console.log("Customer category pricing seeded");

    await seedSpecial_Pricing();
    console.log("Special pricing seeded");

    await seedOrders();
    console.log("Orders seeded");

    await seedOrder_Items();
    console.log("Order items seeded");

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await db.end();
  }
}

seedDatabase();
