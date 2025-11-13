import express from "express";
const app = express();
export default app;

import usersRouter from "#api/users";
import getUserFromToken from "#middleware/getUserFromToken";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";
import customersRouter from './api/customers.js';
import orderItemsRouter from './api/order_items.js';
import ordersRouter from './api/orders.js';
import productsRouter from './api/products.js';
import specialPricingRouter from './api/special_pricing.js';
import customer_category_pricingRouter from './api/customer_category_pricing.js'

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getUserFromToken);

app.use(customer_category_pricingRouter)
app.use(customersRouter);
app.use(orderItemsRouter);
app.use(ordersRouter);
app.use(productsRouter);
app.use(specialPricingRouter);

app.get("/", (req, res) => res.send("Hello, World!"));

app.use("/users", usersRouter);

app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
