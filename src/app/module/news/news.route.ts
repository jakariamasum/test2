import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { newsControllers } from "./news.controller";
import { newsValidations } from "./news.valitadate";
import verifyJWT from "../../middlewares/verifyMiddlewar";
import verifyAdmin from "../../middlewares/verifyAdmin";

const router = express.Router();

//admin routes
router.post(
  "/admin",
  validateRequest(newsValidations.createNewsValidationSchema),
  verifyJWT,
  verifyAdmin,
  newsControllers.createNews
);
router.post("/admin/category-news", newsControllers.getNewsByCategoryIds);

router.put(
  "/admin/:news_id",
  validateRequest(newsValidations.updateNewsValidationSchema),
  newsControllers.updateNews
);
router.delete("/admin/:news_id", newsControllers.deleteNews);

//user route
router.get("/my-news/all", verifyJWT, newsControllers.getNewsByUser);

//public routes
router.get("/", newsControllers.getNews);
router.get("/:lang", newsControllers.getNewsByLanguage);
router.get("/each-news/:id", newsControllers.getSingleNewsById);
router.get("/category-news/:category_id", newsControllers.getNewsByCategory);

export const newsRoutes = router;
