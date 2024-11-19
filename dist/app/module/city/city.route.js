"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const city_validate_1 = require("../subcategory/city.validate");
const city_controller_1 = require("./city.controller");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(city_validate_1.cityValidations.createCitySchemaValidation), verifyMiddlewar_1.default, verifyAdmin_1.default, city_controller_1.cityControllers.createCity);
router.put("/admin/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, city_controller_1.cityControllers.updateCity);
//public routes
router.get("/", city_controller_1.cityControllers.getAllCities);
exports.cityRoutes = router;
