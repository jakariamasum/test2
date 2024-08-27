import express from "express";
import { languageControllers } from "./language.controller";
import validateRequest from "../../middlewares/validateRequest";
import { languageValidations } from "./language.validation";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(languageValidations.languageValidationSchema),
  verifyJWT,
  verifyAdmin,
  languageControllers.createLanguage
);

router.put(
  "/admin/:id",
  validateRequest(languageValidations.updateLanguageValidationSchema),
  verifyJWT,
  verifyAdmin,
  languageControllers.updateLanguage
);

//public routes
router.get("/", languageControllers.getAllLanguage);

export const languageRoutes = router;
