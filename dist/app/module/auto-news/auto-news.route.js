"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const auto_news_controller_1 = require("./auto-news.controller");
const router = express_1.default.Router();
// admin routes
router.post("/", verifyMiddlewar_1.default, verifyAdmin_1.default, auto_news_controller_1.AutoNewsControllers.createAutoNews);
router.put("/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, auto_news_controller_1.AutoNewsControllers.updateaAutoNews);
router.delete("/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, auto_news_controller_1.AutoNewsControllers.deleteAutoNews);
//public routes
router.get("/", auto_news_controller_1.AutoNewsControllers.getAllAutoNews);
router.get("/latest", auto_news_controller_1.AutoNewsControllers.getLatestAutoNews);
exports.AutoNewsRoutes = router;
