import express from "express";
import { languageControllers } from "./language.controller";
import validateRequest from "../../middlewares/validateRequest";
import { languageValidations } from "./language.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(languageValidations.languageValidationSchema),
  languageControllers.createLanguage
);
router.get("/", languageControllers.getAllLanguage);

export const languageRoutes = router;
