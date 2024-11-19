"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: mongoose_1.Schema.Types.Mixed, ref: "Subcategory" },
});
const VideoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    video: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String, required: true }],
    category: { type: CategorySchema, required: true },
});
exports.Video = (0, mongoose_1.model)("Video", VideoSchema);
