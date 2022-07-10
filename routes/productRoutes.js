import express from "express";
const router = express.Router();
import Product from "../models/Product.js";

// @desc Fetch all products
router.get("/", async (req, res) => {
  const products = await Product.find({});
});

// @desc Fetch single products
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
