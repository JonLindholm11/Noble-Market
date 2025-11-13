import express from "express";
import {
  createOrders,
  getOrders,
  getOrdersByCreated_Date,
  getOrdersById,
  updateOrderStatus,
} from "../db/queries/orders.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";
import { createOrder_Items } from "#db/queries/order_items";
import { processCart } from "#utils/priceCalculation";
import requireBody from "#middleware/requireBody";
import db from "../db/client.js";

const router = express.Router();
export default router;

router
  .route("/orders")
  .get(async (req, res) => {
    const orders = await getOrders();
    res.send(orders);
  })
.post(
  requireAuth,
  requireBody(["customer_id", "cart"]),
  async (req, res) => {
    const { customer_id, cart } = req.body;

    try {
      const cartCalculation = await processCart(cart, customer_id, db);
      
      if (cartCalculation.items.length === 0) {
        return res.status(400).json({ error: "No valid items in cart" });
      }

      const [order] = await createOrders({
        customer_id,
        total_amount: cartCalculation.summary.total,
        order_status: 'pending',
        assigned_service_rep: null
      });

      const orderItems = await Promise.all(cartCalculation.items.map(item =>
        createOrder_Items({
          order_id: order.id,
          product_id: item.product_id,
          quantity: item.quantity,
          unit_price: item.customer_price || item.basic_price,
          total_price: item.line_total
        })
      ));

      res.status(200).json({
        message: "Order created successfully",
        order,
        orderItems,
        calculation: cartCalculation.summary
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to create order" });
    }
  }
);

router
  .route("/orders/date/:created_date")
  .get(requireAuth, requireRole([1, 2, 3]), async (req, res) => {
    const ordersByDate = await getOrdersByCreated_Date(req.params.created_date);
    res.json({
      ordersByDate,
    });
  });

router.route("/orders/:id").get(async (req, res) => {
  const ordersById = await getOrdersById(req.params.id);
  res.send(ordersById);
});

router.route("/orders/:id/status").patch(
  requireAuth,
  requireRole([1,2,3]),
  async (req, res) => {
      const id = parseInt(req.params.id);
      const { order_status } = req.body;

      try {
        const order = await updateOrderStatus(
          id,
          order_status
        );
        res.json({
          message: "order status updated successfully",
          order
        });
      } catch (error) {
        console.error("error updating customer pricing")
        res.status(400).json({error : error.message})
      }
  }
)
