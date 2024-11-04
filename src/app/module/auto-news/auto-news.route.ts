import express from "express";

import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";
import { AutoNewsControllers } from "./auto-news.controller";

const router = express.Router();

// admin routes
router.post("/", verifyJWT, verifyAdmin, AutoNewsControllers.createAutoNews);
router.put("/:id", verifyJWT, verifyAdmin, AutoNewsControllers.updateaAutoNews);
router.delete(
  "/:id",
  verifyJWT,
  verifyAdmin,
  AutoNewsControllers.deleteAutoNews
);

//public routes
router.get("/", AutoNewsControllers.getAllAutoNews);
router.get("/latest", AutoNewsControllers.getLatestAutoNews);

export const AutoNewsRoutes = router;
