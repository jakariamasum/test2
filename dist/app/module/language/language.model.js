"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
const mongoose_1 = require("mongoose");
const languageSchema = new mongoose_1.Schema({
    title: String,
    language_code: String,
    language_type: {
        type: String,
        enum: ["0", "1"],
        default: "1",
    },
    link: {
        type: String,
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    relatedPost: { type: String },
    popularPost: { type: String },
    orderPolicy: { type: String },
    copyright: { type: String },
    privacy: { type: String },
    seeAll: { type: String },
    terms: { type: String },
    htmlBoxes: { type: [String] },
}, {
    timestamps: true,
});
exports.Language = (0, mongoose_1.model)("Language", languageSchema);
