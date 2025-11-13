import express from "express";
const router = express.Router();
export default router;
import { createUser, getEmployees, getUserByUsernameAndPassword, updateRole_Id } from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import { createToken } from "#utils/jwt";
import { requireAuth } from "#middleware/requireAuth";
import { requireRole } from "#middleware/requireRole";
import { getCustomerByUser_Id } from "#db/queries/customers";
import { getOrdersByCustomerId } from "#db/queries/orders";
import { getUserById } from "#db/queries/users";

router
  .route("/register")
  .post(requireBody(["email", "password", "role_id"]), async (req, res) => {
    const { email, password, role_id } = req.body;

    const user = await createUser({
      email,
      password,
      role_id,
    });

    const token = await createToken({ id: user.id, role_id: user.role_id });
    res.status(201).json({ token });
  });

router
  .route("/register/admin")
  .post(
    requireAuth,
    requireRole([1]),
    requireBody(["email", "password", "role_id"]),
    async (req, res) => {
      const { email, password, role_id } = req.body;

      if (!Number.isInteger(role_id) || role_id < 1 || role_id > 4) {
        return res.status(400).json({
          error: "Invalid role_id",
          message: "role_id must be an integer between 1 and 4",
        });
      }

      const user = await createUser({ email, password, role_id });

      res.status(201).json({
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          role_id: user.role_id,
        },
      });
    }
  );

router
  .route("/login")
  .post(requireBody(["email", "password"]), async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByUsernameAndPassword(email, password);
    if (!user)
      return res.status(401).json({
        error: "Invalid credentials",
        message: "Invalid email or password",
      });

    const token = await createToken({ id: user.id, role_id: user.role_id });
    res.json({ token });
  });

  router.route("/me").get(
  requireAuth,
  async(req, res) => {
    try {
      const userId = req.user.id

      const [ user, customers ] = await Promise.all([
        getUserById(userId),
        getCustomerByUser_Id(userId)
      ]);

      const customer = customers[0] || null;

      const orders = customer ? await getOrdersByCustomerId(customer.id) : [];

      res.status(200).json({user, customer, orders})
    } catch (error) {
      console.error('Error in /users/me:', error);
      res.status(500).json({error: 'Failed to fetch user data'})
    }
  }
)

  router.route("/employees").get(
    requireAuth,
    requireRole([1]),
    async(req, res) => {
      const employees = await getEmployees();
      res.json(employees)
    }
  )

  router.patch(
  "/:id/role",
  requireAuth,
  requireRole([1]),
  async (req, res) => {
    const userId = parseInt(req.params.id);
    const { role_id } = req.body;

    if (req.user.id === userId && role_id !== 1) {
      return res.status(403).json({
        error: "Cannot demote yourself",
      });
    }
    try {
      const updatedUser = await updateRole_Id(userId, role_id);
      res.json({
        message: "Role updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }}
  )
