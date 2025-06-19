import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getDetailProduct, updateProduct } from "./productController.js";

const productsRoutes = Router()

productsRoutes.get("/", getAllProduct),
productsRoutes.get("/:id", getDetailProduct),
productsRoutes.post("/", createProduct),
productsRoutes.patch("/:id", updateProduct),
productsRoutes.delete("/:id", deleteProduct)

export default productsRoutes