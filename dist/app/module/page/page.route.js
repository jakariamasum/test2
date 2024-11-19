"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const page_controller_1 = require("./page.controller");
const page_validate_1 = require("./page.validate");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(page_validate_1.pageValidations.createPageValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, page_controller_1.PageControllers.createPage);
router.put("/admin/:page_id", (0, validateRequest_1.default)(page_validate_1.pageValidations.updatePageValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, page_controller_1.PageControllers.updatePage);
router.get("/edit-page/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, page_controller_1.PageControllers.getPageById);
router.delete("/:page_id", verifyMiddlewar_1.default, verifyAdmin_1.default, page_controller_1.PageControllers.deletePage);
//public routes
router.get("/", page_controller_1.PageControllers.getPages);
router.get("/get-page/:language", page_controller_1.PageControllers.getPageByLanguage);
exports.pageRoutes = router;
