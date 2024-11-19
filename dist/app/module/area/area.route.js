"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const area_controller_1 = require("./area.controller");
const area_validate_1 = require("./area.validate");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(area_validate_1.areaValidations.createAreaSchemaValidation), verifyMiddlewar_1.default, verifyAdmin_1.default, area_controller_1.areaControllers.createArea);
router.put("/:id", area_controller_1.areaControllers.updateaArea);
router.put("/status/:id", area_controller_1.areaControllers.updateaAreaStaus);
//public routes
router.get("/", area_controller_1.areaControllers.getAllArea);
exports.areaRoutes = router;
