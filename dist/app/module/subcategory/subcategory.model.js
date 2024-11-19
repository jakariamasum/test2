"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategory = void 0;
const mongoose_1 = require("mongoose");
const subCategorySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    lang: {
        type: String,
        required: true,
    },
    type: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
});
exports.SubCategory = (0, mongoose_1.model)("Subcategory", subCategorySchema);
