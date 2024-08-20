import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { newsControllers } from "./news.controller";
import { newsValidations } from "./news.valitadate";
import verifyJWT from "../../middlewares/verifyMiddlewar";

const router = express.Router();
router.post(
  "/",
  validateRequest(newsValidations.createNewsValidationSchema),
  newsControllers.createNews
);
router.get("/", newsControllers.getNews);
router.get("/:lang", newsControllers.getNewsByLanguage);
router.get("/each-news/:id", newsControllers.getSingleNewsById);
router.post("/category-news", newsControllers.getNewsByCategoryIds);
router.get("/category-news/:category_id", newsControllers.getNewsByCategory);
router.get("/my-news/all", verifyJWT, newsControllers.getNewsByUser);
router.put(
  "/:news_id",
  validateRequest(newsValidations.updateNewsValidationSchema),
  newsControllers.updateNews
);
router.delete("/:news_id", newsControllers.deleteNews);

export const newsRoutes = router;
