"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const mongoose_1 = require("mongoose");
const areaSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "City",
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
exports.Area = (0, mongoose_1.model)("Area", areaSchema);
