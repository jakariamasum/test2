import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { analyticsValidations } from "./analytics.validate";
import { analyticsControllers } from "./analytics.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(analyticsValidations.createAnalyticsValidationSchema),
  analyticsControllers.createAnalytics
);
router.get("/", analyticsControllers.getAnalytics);
router.put(
  "/:analytics_id",
  validateRequest(analyticsValidations.updateAnalyticsValidationSchema),
  analyticsControllers.updateAnalytics
);
router.delete("/:analytics_id", analyticsControllers.deleteAnalytics);

export const analyticsRoutes = router;
