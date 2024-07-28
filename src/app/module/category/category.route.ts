import express from "express";
import { categoryControllers } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { categoryValidations } from "./category.validate";

const router = express.Router();
router.post(
  "/",
  validateRequest(categoryValidations.createCategoryValidationSchema),
  categoryControllers.createCategory
);
router.get("/", categoryControllers.getCategories);
router.get("/:id", categoryControllers.getSingleCategory);
router.put(
  "/:category_id",
  validateRequest(categoryValidations.updateCategoryValidationSchema),
  categoryControllers.updateCategory
);
router.delete("/:category_id", categoryControllers.deleteCategory);

export const categoryRoutes = router;
