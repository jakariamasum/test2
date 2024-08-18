import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { storiesValidationSchemas } from "./stories.validation";
import { storiesControllers } from "./stories.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(storiesValidationSchemas.createStoriesValidationSchema),
  storiesControllers.createStory
);
router.get("/", storiesControllers.getStory);

export const storiesRoutes = router;
