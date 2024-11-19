"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const tokenGenerateFunction_1 = require("../utils/tokenGenerateFunction");
const verifyJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access - Missing authorization header",
            error: "",
        });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access - Missing token",
            error: "",
        });
    }
    try {
        const decoded = (0, tokenGenerateFunction_1.verifyToken)(token, config_1.default.jwt_secret);
        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access - Invalid token",
                error: "Invalid token",
            });
        }
        req.decoded = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access - Invalid token",
            error: err,
        });
    }
});
exports.default = verifyJWT;
