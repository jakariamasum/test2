"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const settings_controller_1 = require("./settings.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const settings_validate_1 = require("./settings.validate");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//auth routes
router.post("/admin", verifyMiddlewar_1.default, verifyAdmin_1.default, settings_controller_1.settingControllers.createSettings);
router.put("/admin/:setting_id", (0, validateRequest_1.default)(settings_validate_1.settingValidations.updateSettingValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, settings_controller_1.settingControllers.updateSettings);
router.delete("/admin/:setting_id", verifyMiddlewar_1.default, verifyAdmin_1.default, settings_controller_1.settingControllers.deleteSettings);
//public routes
router.get("/", settings_controller_1.settingControllers.getSettings);
exports.settingRoutes = router;
