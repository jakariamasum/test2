import express from "express";
import { settingControllers } from "./settings.controller";
import validateRequest from "../../middlewares/validateRequest";
import { settingValidations } from "./settings.validate";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//auth routes
router.post(
  "/admin",
  verifyJWT,
  verifyAdmin,
  settingControllers.createSettings
);
router.put(
  "/admin/:setting_id",
  validateRequest(settingValidations.updateSettingValidationSchema),
  verifyJWT,
  verifyAdmin,
  settingControllers.updateSettings
);
router.delete(
  "/admin/:setting_id",
  verifyJWT,
  verifyAdmin,
  settingControllers.deleteSettings
);

//public routes
router.get("/", settingControllers.getSettings);
export const settingRoutes = router;
