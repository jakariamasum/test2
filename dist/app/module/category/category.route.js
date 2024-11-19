"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_validate_1 = require("./category.validate");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(category_validate_1.categoryValidations.createCategoryValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, category_controller_1.categoryControllers.createCategory);
router.put("/admin/:category_id", (0, validateRequest_1.default)(category_validate_1.categoryValidations.updateCategoryValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, category_controller_1.categoryControllers.updateCategory);
router.delete("/admin/:category_id", verifyMiddlewar_1.default, verifyAdmin_1.default, category_controller_1.categoryControllers.deleteCategory);
//public routes
router.get("/", category_controller_1.categoryControllers.getCategories);
router.get("/:id", category_controller_1.categoryControllers.getSingleCategory);
router.get("/type/:lang", category_controller_1.categoryControllers.getCategoriesByLang);
router.get("/category/types", category_controller_1.categoryControllers.getVideoOrStoriesCategory);
exports.categoryRoutes = router;
