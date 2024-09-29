import express from "express";
import { categoryControllers } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { categoryValidations } from "./category.validate";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();
//admin routes
router.post(
  "/admin",
  validateRequest(categoryValidations.createCategoryValidationSchema),
  verifyJWT,
  verifyAdmin,
  categoryControllers.createCategory
);
router.put(
  "/admin/:category_id",
  validateRequest(categoryValidations.updateCategoryValidationSchema),
  verifyJWT,
  verifyAdmin,
  categoryControllers.updateCategory
);
router.delete(
  "/admin/:category_id",
  verifyJWT,
  verifyAdmin,
  categoryControllers.deleteCategory
);

//public routes
router.get("/", categoryControllers.getCategories);
router.get("/:id", categoryControllers.getSingleCategory);
router.get("/type/:lang", categoryControllers.getCategoriesByLang);
router.get("/category/types", categoryControllers.getVideoOrStoriesCategory);

export const categoryRoutes = router;
