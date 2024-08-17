import express from "express";
import { settingControllers } from "./settings.controller";
import validateRequest from "../../middlewares/validateRequest";
import { settingValidations } from "./settings.validate";

const router = express.Router();
router.post("/", settingControllers.createSettings);
router.get("/", settingControllers.getSettings);
router.put(
  "/:setting_id",
  validateRequest(settingValidations.updateSettingValidationSchema),
  settingControllers.updateSettings
);
router.delete("/:setting_id", settingControllers.deleteSettings);

export const settingRoutes = router;
