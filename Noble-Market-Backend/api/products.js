import express from "express";
import {
  getProducts,
  getProductsByCategory,
  getProductsById,
} from "../db/queries/products.js";
import { addCustomerPricingByUserId } from "#utils/priceCalculation";
import db from "../db/client.js";

const router = express.Router();
export default router;

router.route("/products").get(async (req, res) => {
  try {
    const products = await getProducts();
    
    const user_id = req.user?.id;

    const productsWithPricing = await addCustomerPricingByUserId(products, user_id, db);
    
    res.send(productsWithPricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.route("/products/category/:category").get(async (req, res) => {
  const productsByCategory = await getProductsByCategory(
    req.params.category
  );

  const user_id = req.user?.id

  const productsWithPricing = await addCustomerPricingByUserId(productsByCategory, user_id, db)
  res.send(productsWithPricing);
});

router.route("/products/:id").get(async (req, res) => {
  const productsById = await getProductsById(req.params.id);
  
   const user_id = req.user?.id

  const productsWithPricing = await addCustomerPricingByUserId(productsById, user_id, db)
  res.send(productsWithPricing);
});
