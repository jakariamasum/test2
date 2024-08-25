import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { cityValidations } from "../subcategory/city.validate";
import { cityControllers } from "./city.controller";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(cityValidations.createCitySchemaValidation),
  verifyJWT,
  verifyAdmin,
  cityControllers.createCity
);

//public routes
router.get("/", cityControllers.getAllCities);

export const cityRoutes = router;
