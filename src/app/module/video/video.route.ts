import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { videoController } from "./video.controller";
import { videoValidationSchemas } from "./video.validation";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(videoValidationSchemas.createVideoValidationSchema),
  verifyJWT,
  verifyAdmin,
  videoController.createVideo
);
router.put("/admin/:id", verifyJWT, verifyAdmin, videoController.updateVideo);
router.delete(
  "/admin/:id",
  verifyJWT,
  verifyAdmin,
  videoController.deleteVideo
);

// public routes
router.get("/:id", videoController.getSingleVideo);
router.get("/", videoController.getAllVideo);

export const videoRoutes = router;
