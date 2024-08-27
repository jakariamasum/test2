import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PageControllers } from "./page.controller";
import { pageValidations } from "./page.validate";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(pageValidations.createPageValidationSchema),
  verifyJWT,
  verifyAdmin,
  PageControllers.createPage
);
router.put(
  "/admin/:page_id",
  validateRequest(pageValidations.updatePageValidationSchema),
  verifyJWT,
  verifyAdmin,
  PageControllers.updatePage
);
router.get(
  "/edit-page/:id",
  verifyJWT,
  verifyAdmin,
  PageControllers.getPageById
);
router.delete("/:page_id", verifyJWT, verifyAdmin, PageControllers.deletePage);

//public routes
router.get("/", PageControllers.getPages);
router.get("/:path", PageControllers.getPageByPath);
router.get("/get-page/:language", PageControllers.getPageByLanguage);
export const pageRoutes = router;
