import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { adsValidations } from "./ads.validate";
import { adsControllers } from "./ads.controller";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routed
router.post(
  "/admin",
  validateRequest(adsValidations.createAdsValidationSchema),
  verifyJWT,
  verifyAdmin,
  adsControllers.createAds
);

router.put(
  "/admin/:id",
  validateRequest(adsValidations.updateAdSectionSchema),
  adsControllers.updateAds
);

//public routes
router.get("/", adsControllers.getAds);
export const adsRoutes = router;
