"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storiesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const stories_validation_1 = require("./stories.validation");
const stories_controller_1 = require("./stories.controller");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(stories_validation_1.storiesValidationSchemas.createStoriesValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, stories_controller_1.storiesControllers.createStory);
router.put("/admin/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, stories_controller_1.storiesControllers.updateStory);
router.delete("/admin/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, stories_controller_1.storiesControllers.deleteStory);
//public routes
router.get("/", stories_controller_1.storiesControllers.getStory);
router.get("/:id", stories_controller_1.storiesControllers.getSingleStory);
exports.storiesRoutes = router;
