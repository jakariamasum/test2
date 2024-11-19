"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const verifyMiddlewar_1 = __importDefault(require("../../middlewares/verifyMiddlewar"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = express_1.default.Router();
//admin routes
router.post("/admin", (0, validateRequest_1.default)(user_validation_1.userValidationSchemas.createUserValidationSchema), verifyMiddlewar_1.default, verifyAdmin_1.default, user_controller_1.userControllers.createUser);
router.put("/admin/:user_id", verifyMiddlewar_1.default, verifyAdmin_1.default, user_controller_1.userControllers.updateUser);
router.put("/admin/change-password/:id", verifyMiddlewar_1.default, verifyAdmin_1.default, user_controller_1.userControllers.changePassword);
router.delete("/admin/:user_id", verifyMiddlewar_1.default, verifyAdmin_1.default, user_controller_1.userControllers.deleteUser);
router.get("/admin", verifyMiddlewar_1.default, verifyAdmin_1.default, user_controller_1.userControllers.getAllUser);
//user routes
router.post("/verify-user", verifyMiddlewar_1.default, user_controller_1.userControllers.verifyUser);
//public routes
router.post("/login", user_controller_1.userControllers.loginUser);
router.get("/:id", user_controller_1.userControllers.getSingleUser);
router.get("/get-all/get", user_controller_1.userControllers.getAllUser);
exports.userRoutes = router;
