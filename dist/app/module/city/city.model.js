"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.City = (0, mongoose_1.model)("City", citySchema);
