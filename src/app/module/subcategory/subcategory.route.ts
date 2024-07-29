import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SubCategoryValidations } from "./subcategory.validate";
import { SubCategoryControllers } from "./subcategory.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(SubCategoryValidations.createSubCategoryValidationSchema),
  SubCategoryControllers.createSubCategory
);
router.get("/", SubCategoryControllers.getSubCategory);

export const subCategoryRoutes = router;
