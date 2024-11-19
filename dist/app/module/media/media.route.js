"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const media_validate_1 = require("./media.validate");
const media_controller_1 = require("./media.controller");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(media_validate_1.mediaValidations.createMediaValidationSchema), media_controller_1.mediaControllers.createMedia);
router.get("/", media_controller_1.mediaControllers.getMedia);
router.put("/:media_id", (0, validateRequest_1.default)(media_validate_1.mediaValidations.updateMediaValidationSchema), media_controller_1.mediaControllers.updateMedia);
router.delete("/:media_id", media_controller_1.mediaControllers.deleteMedia);
exports.mediaRoutes = router;
