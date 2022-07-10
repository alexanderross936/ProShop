import express from "express";
import products from "./products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
const app = express();
app.use("/api/products", productRoutes);

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} ON PORT ${PORT}`)
);
