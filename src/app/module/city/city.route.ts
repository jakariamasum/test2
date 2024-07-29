import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { cityValidations } from "../subcategory/city.validate";
import { cityControllers } from "./city.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(cityValidations.createCitySchemaValidation),
  cityControllers.createCity
);
router.get("/", cityControllers.getAllCities);

export const cityRoutes = router;
