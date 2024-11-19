"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
const mongoose_1 = require("mongoose");
const settingSchema = new mongoose_1.Schema({
    metaDescription: { type: String },
    description: { type: String },
    privacy: { type: String },
    terms: { type: String },
    logo: { type: String },
    favicon: { type: String },
    lotoImg: { type: String },
    metaImg: { type: String },
    title: { type: String },
    bgColor: { type: String },
    copyright: { type: String },
    content: { type: String },
    categoryStyle: { type: String },
    detailsStyle: { type: String },
    header: { type: String },
    footer: { type: String },
    facebook: { type: String },
    whatsapp: { type: String },
    twitter: { type: String },
    pinterest: { type: String },
    headerBox: { type: String },
    bodyBox: { type: String },
    waterMark: { type: String },
});
exports.Setting = (0, mongoose_1.model)("Setting", settingSchema);
