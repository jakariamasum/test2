import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { areaControllers } from "./area.controller";
import { areaValidations } from "./area.validate";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(areaValidations.createAreaSchemaValidation),
  verifyJWT,
  verifyAdmin,
  areaControllers.createArea
);

//public routes
router.get("/", areaControllers.getAllArea);

export const areaRoutes = router;
