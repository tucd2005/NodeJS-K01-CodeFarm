import { Router } from "express";
import validBodyRequest from './../../common/middlewares/validBodyRequest.js';
import categorySchema from "./category.schema.js";
import { createCategory, deleteCategory, getDetailCategory, getListCategory, softDeleteCategory, updateCategory } from './category.controller.js';

const categoryRoutes = Router()

categoryRoutes.get("/",getListCategory)
categoryRoutes.get("/:id",getDetailCategory)
categoryRoutes.post("/",createCategory)
categoryRoutes.patch("/:id",updateCategory)
categoryRoutes.delete("/:id",deleteCategory)

categoryRoutes.delete("/soft-delete/:id", softDeleteCategory)

categoryRoutes.use(validBodyRequest(categorySchema))
categoryRoutes.post("/", createCategory)
categoryRoutes.patch("/:id", updateCategory)

export default categoryRoutes