"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bookmark_validate_1 = require("./bookmark.validate");
const bookmark_controller_1 = require("./bookmark.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(bookmark_validate_1.bookmarkValidations.createBookmarkValidationSchema), bookmark_controller_1.bookmarkControllers.createBookmark);
router.get("/", bookmark_controller_1.bookmarkControllers.getBookmarks);
router.put("/:bookmark_id", (0, validateRequest_1.default)(bookmark_validate_1.bookmarkValidations.updateBookmarkValidationSchema), bookmark_controller_1.bookmarkControllers.updateBookmark);
router.delete("/:bookmark_id", bookmark_controller_1.bookmarkControllers.deleteBookmark);
exports.bookmarkRoutes = router;
