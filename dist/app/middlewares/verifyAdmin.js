"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyAdmin = (req, res, next) => {
    if (req.decoded &&
        typeof req.decoded !== "string" &&
        req.decoded.role === "admin") {
        next();
    }
    else {
        return res.status(403).json({
            success: false,
            message: "Forbidden - Admin access required",
            error: "",
        });
    }
};
exports.default = verifyAdmin;
