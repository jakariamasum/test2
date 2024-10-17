import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchemas } from "./user.validation";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(userValidationSchemas.createUserValidationSchema),
  verifyJWT,
  verifyAdmin,
  userControllers.createUser
);
router.put(
  "/admin/:user_id",
  verifyJWT,
  verifyAdmin,
  userControllers.updateUser
);
router.put(
  "/admin/change-password/:id",
  verifyJWT,
  verifyAdmin,
  userControllers.changePassword
);
router.delete(
  "/admin/:user_id",
  verifyJWT,
  verifyAdmin,
  userControllers.deleteUser
);
router.get("/admin", verifyJWT, verifyAdmin, userControllers.getAllUser);

//user routes
router.post("/verify-user", verifyJWT, userControllers.verifyUser);

//public routes
router.post("/login", userControllers.loginUser);
router.get("/:id", userControllers.getSingleUser);

export const userRoutes = router;
