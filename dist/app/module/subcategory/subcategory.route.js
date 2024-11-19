"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const subcategory_validate_1 = require("./subcategory.validate");
const subcategory_controller_1 = require("./subcategory.controller");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(subcategory_validate_1.SubCategoryValidations.createSubCategoryValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, subcategory_controller_1.SubCategoryControllers.createSubCategory);
router.put("/admin/:category_id", (0, validateRequest_1.default)(subcategory_validate_1.SubCategoryValidations.updateSubCategoryValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, subcategory_controller_1.SubCategoryControllers.updateSubCategory);
router.delete("/admin/:category_id", verifyMiddlewar_1.default, verifyAdmin_1.default, subcategory_controller_1.SubCategoryControllers.deleteSubCategory);
//public routes
router.get("/", subcategory_controller_1.SubCategoryControllers.getSubCategory);
router.get("/category/:id", subcategory_controller_1.SubCategoryControllers.getSubCategoryByCategory);
router.get("/:lang", subcategory_controller_1.SubCategoryControllers.getSubCategoryByLang);
router.get("/sub-category/types", subcategory_controller_1.SubCategoryControllers.getVideoOrStoriesSubCategory);
exports.subCategoryRoutes = router;
