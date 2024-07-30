import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchemas } from "./user.validation";
import verifyJWT from "../../middlewares/verifyMiddlewar";

const router = express.Router();

router.post(
  "/",
  validateRequest(userValidationSchemas.createUserValidationSchema),
  userControllers.createUser
);
router.post("/login", userControllers.loginUser);
router.post("/verify-user", verifyJWT, userControllers.verifyUser);
router.get("/", userControllers.getAllUser);
router.get("/:id", userControllers.getSingleUser);
router.put("/:user_id", userControllers.updateUser);
router.delete("/:user_id", userControllers.deleteUser);

export const userRoutes = router;
