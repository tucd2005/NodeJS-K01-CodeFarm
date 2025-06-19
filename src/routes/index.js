import { Router } from "express";

import categoryRoutes from "../modules/category/category.routes.js";
import productsRoutes from '../modules/product/productRoutes.js';


const router = Router()

router.use("/products",productsRoutes)
router.use("/categories",categoryRoutes)

export default router; 

