import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { newsControllers } from "./news.controller";
import { newsValidations } from "./news.valitadate";

const router = express.Router();
router.post(
  "/",
  validateRequest(newsValidations.createNewsValidationSchema),
  newsControllers.createNews
);
router.get("/", newsControllers.getNews);
router.get("/:language_id", newsControllers.getNewsByLanguage);
router.get("/category-news/:category_id", newsControllers.getNewsByCategory);
router.get("/user-news/:user_id", newsControllers.getNewsByUser);
router.put(
  "/:news_id",
  validateRequest(newsValidations.updateNewsValidationSchema),
  newsControllers.updateNews
);
router.delete("/:news_id", newsControllers.deleteNews);

export const newsRoutes = router;
