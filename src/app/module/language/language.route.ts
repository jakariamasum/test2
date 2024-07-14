import express from "express";
import { languageControllers } from "./language.controller";

const router = express.Router();

router.post("/", languageControllers.createLanguage);
router.get("/", languageControllers.getAllLanguage);

export const languageRoutes = router;
