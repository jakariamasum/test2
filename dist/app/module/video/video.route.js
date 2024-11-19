"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const video_controller_1 = require("./video.controller");
const video_validation_1 = require("./video.validation");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(video_validation_1.videoValidationSchemas.createVideoValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, video_controller_1.videoController.createVideo);
router.put("/admin/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, video_controller_1.videoController.updateVideo);
router.delete("/admin/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, video_controller_1.videoController.deleteVideo);
// public routes
router.get("/:id", video_controller_1.videoController.getSingleVideo);
router.get("/", video_controller_1.videoController.getAllVideo);
exports.videoRoutes = router;
