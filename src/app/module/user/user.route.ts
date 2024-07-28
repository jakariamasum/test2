import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchemas } from "./user.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(userValidationSchemas.createUserValidationSchema),
  userControllers.createUser
);
router.get("/", userControllers.getAllUser);
router.get("/:id", userControllers.getSingleUser);

export const userRoutes = router;
