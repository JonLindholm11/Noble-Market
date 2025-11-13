import express from "express";
import {
  getOrder_Items,
  getOrder_ItemsById,
  getOrder_ItemsByOrder_Id,
} from "../db/queries/order_items.js";
import { requireAuth } from "#middleware/requireAuth";

const router = express.Router();
export default router;

router.route("/order_items").get(async (req, res) => {
  const orders_items = await getOrder_Items();
  res.send(orders_items);
});

router.route("/order_items/:id").get(async (req, res) => {
  const orders_itemsById = await getOrder_ItemsById(req.params.id);
  res.send(orders_itemsById);
});

router.route("/order_items/order/:order_id").get(
  requireAuth,
  async (req, res) => {
    try {
    const orderId = req.params.order_id

    const orderItems = await getOrder_ItemsByOrder_Id(orderId)

    res.status(200).json({orderItems})
    } catch (error) {
      res.status(500).json({error: 'Error fetching order_items by order_id'})
    }
  }
)
