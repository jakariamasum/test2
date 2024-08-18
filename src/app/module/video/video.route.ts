import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { videoController } from "./video.controller";
import { videoValidationSchemas } from "./video.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(videoValidationSchemas.createVideoValidationSchema),
  videoController.createVideo
);

router.get("/", videoController.getAllVideo);

export const videoRoutes = router;
