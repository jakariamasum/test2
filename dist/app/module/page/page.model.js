"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const mongoose_1 = require("mongoose");
const categoriesSchem = new mongoose_1.Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
});
const SectionDataSchema = new mongoose_1.Schema({
    sectionTitle: {
        type: String,
        default: "",
    },
    type: { type: String },
    backgroundColor: { type: String },
    desktopGrid: { type: String },
    color: { type: String },
    mobileGrid: { type: String },
    sectionLimit: { type: String },
    imgPosition: { type: String },
    width: { type: String, required: true },
    box: { type: String, required: true },
    categories: { type: [categoriesSchem], required: true },
});
const RowDataSchema = new mongoose_1.Schema({
    textColor: { type: String },
    bgColor: { type: String },
    id: { type: Number },
    sections: { type: [SectionDataSchema] },
});
const PageSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    rows: { type: [RowDataSchema], required: true },
    language: { type: String, required: true },
});
exports.Page = (0, mongoose_1.model)("Page", PageSchema);
