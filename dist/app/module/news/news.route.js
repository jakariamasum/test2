"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const news_controller_1 = require("./news.controller");
const news_valitadate_1 = require("./news.valitadate");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(news_valitadate_1.newsValidations.createNewsValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, news_controller_1.newsControllers.createNews);
router.post("/admin/category-news", news_controller_1.newsControllers.getNewsByCategoryIds);
router.put("/admin/:news_id", (0, validateRequest_1.default)(news_valitadate_1.newsValidations.updateNewsValidationSchema), news_controller_1.newsControllers.updateNews);
router.delete("/admin/:news_id", news_controller_1.newsControllers.deleteNews);
//user route
router.post("/user/news", (0, validateRequest_1.default)(news_valitadate_1.newsValidations.createNewsValidationSchema), verifyMiddlewar_1.default, news_controller_1.newsControllers.createNews);
router.get("/my-news/all", verifyMiddlewar_1.default, news_controller_1.newsControllers.getNewsByUser);
router.put("/user/news/edit/:news_id", verifyMiddlewar_1.default, news_controller_1.newsControllers.updateNews);
router.delete("/user/news/delete/:news_id", verifyMiddlewar_1.default, news_controller_1.newsControllers.deleteNews);
//public routes
router.get("/", news_controller_1.newsControllers.getNews);
router.get("/:lang", news_controller_1.newsControllers.getNewsByLanguage);
router.get("/each-news/:id", news_controller_1.newsControllers.getSingleNewsById);
router.get("/category-news/:category_id", news_controller_1.newsControllers.getNewsByCategory);
router.get("/sub-category-news/:sub_category_id", news_controller_1.newsControllers.getNewsBySubCategory);
router.get("/type/stories", news_controller_1.newsControllers.getStories);
router.get("/type/videos", news_controller_1.newsControllers.getVideos);
exports.newsRoutes = router;
