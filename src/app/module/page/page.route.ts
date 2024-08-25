import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PageControllers } from "./page.controller";
import { pageValidations } from "./page.validate";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(pageValidations.createPageValidationSchema),
  PageControllers.createPage
);
router.put(
  "/:page_id",
  validateRequest(pageValidations.updatePageValidationSchema),
  PageControllers.updatePage
);
router.delete("/:page_id", PageControllers.deletePage);

//public routes
router.get("/", PageControllers.getPages);
router.get("/:path", PageControllers.getPageByPath);
router.get("/get-page/:language", PageControllers.getPageByLanguage);
export const pageRoutes = router;
