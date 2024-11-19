"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const mongoose_1 = require("mongoose");
const BannerSchema = new mongoose_1.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
});
const storySchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: true },
    subCategory: { type: mongoose_1.Schema.Types.Mixed, ref: "Subcategory" },
    banners: [BannerSchema],
}, { timestamps: true });
exports.Story = (0, mongoose_1.model)("Story", storySchema);
