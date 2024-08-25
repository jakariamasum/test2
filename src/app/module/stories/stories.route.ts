import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { storiesValidationSchemas } from "./stories.validation";
import { storiesControllers } from "./stories.controller";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(storiesValidationSchemas.createStoriesValidationSchema),
  verifyJWT,
  verifyAdmin,
  storiesControllers.createStory
);

//public routes
router.get("/", storiesControllers.getStory);

export const storiesRoutes = router;
