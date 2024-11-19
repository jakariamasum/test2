"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LocationSchema = new mongoose_1.Schema({
    city: { type: String, required: true },
    area: { type: String },
});
const CategorySchema = new mongoose_1.Schema({
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: mongoose_1.Schema.Types.Mixed },
});
const StorySchema = new mongoose_1.Schema({
    img: { type: String },
    title: { type: String },
});
const NewsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String },
    tags: { type: [String] },
    img: { type: String },
    waterMark: { type: String },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    location: { type: LocationSchema },
    category: { type: CategorySchema, required: true },
    lang: { type: String },
    stories: { type: [StorySchema] },
    video: { type: String },
    sourceBy: { type: String },
    status: {
        type: String,
        enum: ["published", "pending"],
        default: "pending",
    },
    publishedDate: { type: Date, default: Date.now },
}, { timestamps: true });
const News = (0, mongoose_1.model)("News", NewsSchema);
exports.default = News;
