import express from "express";
import {
  createSpecial_Pricing,
  getActiveSpecials,
  getSpecial_Pricing,
} from "../db/queries/special_pricing.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";
import requireBody from "#middleware/requireBody";

const router = express.Router();
export default router;

router.route("/special_pricing").get(async (req, res) => {
  const special_price = await getSpecial_Pricing();
  res.send(special_price);
})
  .post(
    requireAuth,
    requireRole([1]),
    requireBody([
      "product_id",
      "special_price",
      "start_date",
      "end_date",
      "created_by_user_id",
    ]),
    async (req, res) => {
      const {
        product_id,
        special_price,
        start_date,
        end_date,
        created_by_user_id,
      } = req.body;
      const price = Number(special_price);

      if (!Number.isInteger(created_by_user_id)) {
        return res.status(400).json({
          error: "Invalid user_id",
          message: "Not a valid user",
        });
      }

      if (isNaN(price)) {
        return res.status(400).json({
          error: "Invalid special price",
          message: "special price must be a valid number",
        });
      }

      if (price <= 0) {
        return res.status(400).json({
          error: "Invalid special price",
          message: "Special price must be greater than 0",
        });
      }

      if (!Number.isInteger(price * 100)) {
        return res.status(400).json({
          error: "Invalid special price",
          message: "special price must have at most 2 decimal places",
        });
      }

      const sp = await createSpecial_Pricing({
        product_id,
        special_price: price,
        start_date,
        end_date,
        created_by_user_id,
      });

      res.status(201).json({
        message: "special price created successfully",
        sp,
      });
    }
  );

router.route("/special_pricing/active_special").get(async (req, res) => {
  const activeSpecial = await getActiveSpecials();
  res.json({
    activeSpecial,
  });
});

router.route("/special_pricing/:id").get(async (req, res) => {
  const special_priceById = await getSpecial_Pricing(req.params.id);
  res.send(special_priceById);
});

