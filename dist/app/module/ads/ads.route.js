"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const ads_validate_1 = require("./ads.validate");
const ads_controller_1 = require("./ads.controller");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routed
router.post("/admin", (0, validateRequest_1.default)(ads_validate_1.adsValidations.createAdsValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, ads_controller_1.adsControllers.createAds);
router.put("/admin/:id", (0, validateRequest_1.default)(ads_validate_1.adsValidations.updateAdSectionSchema), ads_controller_1.adsControllers.updateAds);
//public routes
router.get("/", ads_controller_1.adsControllers.getAds);
exports.adsRoutes = router;
