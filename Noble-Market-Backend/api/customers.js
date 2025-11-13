import express from "express";
import {
  getCustomers,
  getCustomersById,
  getCustomerByAssigned_Salesman_Id,
  updateCustomerAssignedSalesmanId,
  updateCustomerInfo,
  createCustomers,
} from "../db/queries/customers.js";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";

const router = express.Router();
export default router;

router
  .route("/customers")
  .get(async (req, res) => {
    const customers = await getCustomers();
    res.json(customers);
  })
  .post(requireAuth, async (req, res) => {
  try {
    const { company_name, contact_name } = req.body;
    const user_id = req.user.id;
    const email = req.user.email; 

    console.log('Creating customer with:', { user_id, company_name, contact_name, email });

    const customer = await createCustomers({
      user_id,
      company_name,
      contact_name,
      email,
      assigned_salesman_id: null,
      account_status: 'pending'
    });

    res.status(201).json({
      message: "customer created successfully",
      customer,
    });
  } catch (error) {
    console.error('Error message:', error.message);
    res.status(500).json({ error: "Failed to create customer" });
  }
});

router.route("/customers/salesman/:salesman_id").get(async (req, res) => {
  const customersBySalesman_Id = await getCustomerByAssigned_Salesman_Id(
    req.params.salesman_id
  );
  res.json(customersBySalesman_Id);
});

router.route("/customers/:id").get(async (req, res) => {
  const customersById = await getCustomersById(req.params.id);
  res.send(customersById);
})
  .patch(requireAuth, requireRole([1]), async (req, res) => {
    const id = parseInt(req.params.id);
    const { assigned_salesman_id } = req.body;

    try {
      const customer = await updateCustomerAssignedSalesmanId(
        id,
        assigned_salesman_id
      );
      res.json({
        message: "customer's salesman updated successfully",
        customer,
      });
    } catch (error) {
      console.error("Error updating customer assigned salesman", error);
      res.status(400).json({ error: error.message });
    }
  });

router.route("/customers/update/:id").put(requireAuth, async (req, res) => {
  const id = parseInt(req.params.id);
  const { contact_name, company_name } = req.body;

  try {
    const customer = await updateCustomerInfo(id, company_name, contact_name);
    res.json({
      message: "customer info updated successfully",
      customer,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});
