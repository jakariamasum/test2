import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { areaControllers } from "./area.controller";
import { areaValidations } from "./area.validate";

const router = express.Router();

router.post(
  "/",
  validateRequest(areaValidations.createAreaSchemaValidation),
  areaControllers.createArea
);
router.get("/", areaControllers.getAllArea);

export const areaRoutes = router;
