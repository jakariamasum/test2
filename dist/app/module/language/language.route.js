"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const language_controller_1 = require("./language.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const language_validation_1 = require("./language.validation");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(language_validation_1.languageValidations.languageValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, language_controller_1.languageControllers.createLanguage);
router.put("/admin/:id", (0, validateRequest_1.default)(language_validation_1.languageValidations.updateLanguageValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, language_controller_1.languageControllers.updateLanguage);
//public routes
router.get("/", language_controller_1.languageControllers.getAllLanguage);
exports.languageRoutes = router;
