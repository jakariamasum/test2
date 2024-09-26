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
router.put(
  "/admin/:id",
  verifyJWT,
  verifyAdmin,
  storiesControllers.updateStory
);

//public routes
router.get("/", storiesControllers.getStory);
router.get("/:id", storiesControllers.getSingleStory);

export const storiesRoutes = router;
