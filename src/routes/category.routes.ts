import { Router } from "express";
import { CategoryController } from "../modules/category/category.controller";

const router = Router();
const categoryController = new CategoryController();

router.post('/category', categoryController.saveNewCategory);

export { router }