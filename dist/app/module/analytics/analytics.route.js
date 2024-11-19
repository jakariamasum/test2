"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const analytics_validate_1 = require("./analytics.validate");
const analytics_controller_1 = require("./analytics.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(analytics_validate_1.analyticsValidations.createAnalyticsValidationSchema), analytics_controller_1.analyticsControllers.createAnalytics);
router.get("/", analytics_controller_1.analyticsControllers.getAnalytics);
router.put("/:analytics_id", (0, validateRequest_1.default)(analytics_validate_1.analyticsValidations.updateAnalyticsValidationSchema), analytics_controller_1.analyticsControllers.updateAnalytics);
router.delete("/:analytics_id", analytics_controller_1.analyticsControllers.deleteAnalytics);
exports.analyticsRoutes = router;
