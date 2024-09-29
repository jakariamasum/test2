import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SubCategoryValidations } from "./subcategory.validate";
import { SubCategoryControllers } from "./subcategory.controller";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(SubCategoryValidations.createSubCategoryValidationSchema),
  verifyJWT,
  verifyAdmin,
  SubCategoryControllers.createSubCategory
);

//public routes
router.get("/", SubCategoryControllers.getSubCategory);
router.get("/:lang", SubCategoryControllers.getSubCategoryByLang);
router.get(
  "/sub-category/types",
  SubCategoryControllers.getVideoOrStoriesSubCategory
);

export const subCategoryRoutes = router;
