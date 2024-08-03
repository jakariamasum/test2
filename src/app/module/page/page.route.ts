import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { PageControllers } from "./page.controller";
import { pageValidations } from "./page.validate";

const router = express.Router();
router.post(
  "/",
  validateRequest(pageValidations.createPageValidationSchema),
  PageControllers.createPage
);
router.get("/", PageControllers.getPages);
router.get("/:path", PageControllers.getPageByPath);
router.put(
  "/:page_id",
  validateRequest(pageValidations.updatePageValidationSchema),
  PageControllers.updatePage
);
router.delete("/:page_id", PageControllers.deletePage);

export const pageRoutes = router;
