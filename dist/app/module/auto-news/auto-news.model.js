"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNews = void 0;
const mongoose_1 = require("mongoose");
const autoNewsSchema = new mongoose_1.Schema({
    language: { type: String, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Category" },
    subcategory: { type: mongoose_1.Schema.Types.Mixed, ref: "Subcategory" },
    duration: { type: String },
    link: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    status: { type: String },
    isDeleted: { type: Boolean, default: false },
    lastCheck: { type: Date, default: new Date() },
    location: { type: String, default: null },
}, {
    timestamps: true,
});
exports.AutoNews = (0, mongoose_1.model)("AutoNews", autoNewsSchema);
