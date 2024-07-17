import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { mediaValidations } from "./media.validate";
import { mediaControllers } from "./media.controller";

const router = express.Router();
router.post(
  "/",
  validateRequest(mediaValidations.createMediaValidationSchema),
  mediaControllers.createMedia
);
router.get("/", mediaControllers.getMedia);
router.put(
  "/:media_id",
  validateRequest(mediaValidations.updateMediaValidationSchema),
  mediaControllers.updateMedia
);
router.delete("/:media_id", mediaControllers.deleteMedia);

export const mediaRoutes = router;
