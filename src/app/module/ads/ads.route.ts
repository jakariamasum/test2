import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { adsValidations } from "./ads.validate";
import { adsControllers } from "./ads.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(adsValidations.createAdsValidationSchema),
  adsControllers.createAds
);
router.get("/", adsControllers.getAds);
router.put(
  "/:id",
  validateRequest(adsValidations.updateAdSectionSchema),
  adsControllers.updateAds
);
export const adsRoutes = router;
