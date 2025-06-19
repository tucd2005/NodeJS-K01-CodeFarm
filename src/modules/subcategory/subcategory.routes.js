import { Router } from "express";
import { createSubCategory, deleteSubCategory, getDetailSubCategory, getListSubCategory, restoreSubCategory, softDeleteSubCategory, updateSubCategory } from "./subcategory.controller.js";
import validBodyRequest from './../../common/middlewares/validBodyRequest.js';
import categorySchema from './../category/category.schema.js';


const subCategoryRoutes = Router();
subCategoryRoutes.get("/", getListSubCategory);

subCategoryRoutes.get("/:id", getDetailSubCategory);
subCategoryRoutes.get("/delete/:id", deleteSubCategory);
subCategoryRoutes.get("/soft-delete/:id", softDeleteSubCategory);
subCategoryRoutes.get("/restore/:id", restoreSubCategory);

subCategoryRoutes.use(validBodyRequest(categorySchema));
subCategoryRoutes.post('/',createSubCategory)
subCategoryRoutes.patch('/:id', updateSubCategory)

export default subCategoryRoutes

